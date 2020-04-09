import React, {useState, useEffect} from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

import api from '../../services/api';

export default function Receitas(){
    const navigation = useNavigation();
    const route = useRoute();
    //Estado da Aplicação
    const [referencia, setReferencia] = useState(route.params.referencia);
    const [receitas, setReceitas] = useState([]);

    //Manipulação dos Dados da Aplicação
    async function loadData(){
        const response = await api.get(`api/receitas?Mes=${referencia}`);
        setReceitas(response.data);
    }

    useEffect(() => {
        loadData();
    },[]);

    async function deleteItem(idItem){
        const response = await api.delete(`api/receitas/${idItem}`);
        if(response.status == 200){
            setReceitas(receitas.filter(r => r.id !== idItem));
        }
        else{
            alert('Não foi possível excluir.');
        }
    }

    //Navegação  
    function navigateToHome(){
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerBrand}>$ HomeMoney</Text>
                <Text style={styles.headerText}>{referencia}</Text>
                <TouchableOpacity onPress={navigateToHome}>
                    <FontAwesome  name="arrow-left" size={30} color="#92278f"/>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.headerTextRD}><FontAwesome  name="plus" size={20} color="#00a651"/> Receitas Lançadas</Text>
                <FlatList
                    data={receitas}
                    keyExtractor={receita => String(receita.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: receita }) => (
                        <View style={styles.dashBoard}>
                            <View style={styles.dashBoardHeader}>
                                <Text style={styles.titleDash}>{receita.nomeReceita}</Text>
                                <Text style={styles.titleDash}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(receita.valor)}</Text>
                                <TouchableOpacity onPress={() => deleteItem(receita.id)}>
                                    <FontAwesome name="trash" size={20} color="#92278f" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}