import React, {useState, useEffect,} from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import styles from './styles';

import api from '../../services/api';

export default function Home(){
    const navigation = useNavigation();
    const route = useRoute();
    const [receitas, setReceitas] = useState('R$ 0,00');
    const [despesas, setdespesas] = useState('R$ 0,00');
    const [referencia, setReferencia] = useState('-');
    const [saldo, setSaldo] = useState('R$ 0,00');

    async function loadData(){
        const response = await api.get('api/money');
        setReferencia(response.data.referencia);
        setReceitas(response.data.totalReceitas);
        setdespesas(response.data.totalDespesas);
        setSaldo(response.data.saldo);
    };

    useEffect(() => {
        const teste = navigation.addListener('focus', () =>{
            loadData();
        });
    },[]);

    //Navegação
    function navigateToReceitas(){
        navigation.navigate('Receitas',{referencia});
    }
    
    function navigateToDespesas(){
        navigation.navigate('Despesas',{referencia});
    }

    function navigateToBusca(){
        navigation.navigate('Busca');
    }

    function navigateToNovaReceita(){
        navigation.navigate('NovaReceita',{referencia});
    }

    function navigateToNovaDespesa(){
        navigation.navigate('NovaDespesa',{referencia});
    }
    //Retorna o Component
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerBrand}>$ HomeMoney</Text>
                <Text style={styles.headerText}>{referencia}</Text>
                <FontAwesome  name="home" size={30} color="#92278f"/>
            </View>
            <View style={styles.dashBoard}>
                <View style={styles.dashBoardHeader}>
                <Text style={styles.titleDash}>Receitas</Text>
                <FontAwesome name="plus" size={30} color="#00a651"/>
                </View>
                <Text style={styles.valueDash}>{receitas}</Text>
                <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToReceitas()}>
                    <Text style={styles.detailsButtonText}>Ver Lançamentos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dashBoard2}>
                <View style={styles.dashBoardHeader}>
                    <Text style={styles.titleDash2}>Despesas</Text>
                    <FontAwesome name="minus" size={30} color="#FF4206"/>
                </View>
                <Text style={styles.valueDash}>{despesas}</Text>
                <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDespesas()}>
                    <Text style={styles.detailsButtonText}>Ver Lançamentos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dashBoard2}>
                <View style={styles.dashBoardHeader}>
                    <Text style={styles.titleDashResult}>Saldo</Text>
                    <Entypo name="wallet" size={30} color="#ffbe06"/>                
                </View>
                <Text style={styles.valueDash}>{saldo}</Text>
            </View>
            <View style={styles.dashBoard2}>
                <View style={styles.lineButtons}>
                    <TouchableOpacity style={styles.action} onPress={() => navigateToNovaReceita()}>
                        <FontAwesome name="plus" size={30} color="#92278f"/>
                        <Text style={styles.actionText}>Lançar Receita</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={() => navigateToNovaDespesa()}>
                        <FontAwesome name="minus" size={30} color="#92278f"/>
                        <Text style={styles.actionText}>Lançar Despesa</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={() => navigateToBusca()}>
                        <FontAwesome name="search" size={30} color="#92278f"/>
                        <Text style={styles.actionText}>Efetuar Busca</Text>    
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}