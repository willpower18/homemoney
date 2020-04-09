import React, {useState, useEffect} from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

import api from '../../services/api';

export default function Despesas(){
    const navigation = useNavigation();
    const route = useRoute();
    //Estado da Aplicação
    const [referencia, setReferencia] = useState(route.params.referencia);
    const [despesas, setDespesas] = useState([]);

    //Manipulação dos Dados da Aplicação
    async function loadData(){
        const response = await api.get(`api/despesas?Mes=${referencia}`);
        setDespesas(response.data);
    }

    useEffect(() => {
        loadData();
    },[]);

    async function deleteItem(idItem){
        const response = await api.delete(`api/despesas/${idItem}`);
        if(response.status == 200){
            setDespesas(despesas.filter(d => d.id !== idItem));
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
                <Text style={styles.headerText}>04/2020</Text>
                <TouchableOpacity onPress={navigateToHome}>
                    <FontAwesome  name="arrow-left" size={30} color="#92278f"/>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.headerTextRD}><FontAwesome  name="minus" size={20} color="#FF4206"/> Despesas Lançadas</Text>
            </View>
            <FlatList
                data={despesas}
                keyExtractor={despesa => String(despesa.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: despesa }) => (
                    <View style={styles.dashBoard}>
                        <View style={styles.dashBoardHeader}>
                            <Text style={styles.titleDash}>{despesa.nomeDespesa}</Text>
                            <Text style={styles.titleDash}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(despesa.valor)}</Text>
                            <TouchableOpacity onPress={() => deleteItem(despesa.id)}>
                                <FontAwesome name="trash" size={20} color="#92278f" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}