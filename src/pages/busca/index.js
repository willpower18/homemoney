import React, { useState } from 'react';
import { View, ScrollView, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

import api from '../../services/api';

export default function Busca() {
    const navigation = useNavigation();
    const [dtBusca, setDtBusca] = useState('');
    const [receitas, setReceitas] = useState([]);
    const [despesas, setDespesas] = useState([]);
    const [valorReceita, setValorReceita] = useState('-');
    const [valorDespesa, setValorDespesa] = useState('-');
    const [saldo, SetSaldo] = useState('-');

    function navigateToHome() {
        navigation.navigate('Home');
    }

    function maskInput(inputVal) {
        let tamanho = inputVal.length;
        if (tamanho == 2) {
            inputVal += '/';
        }
        setDtBusca(inputVal);
    }

    async function Busca() {
        var url = 'api/busca';
        if(dtBusca != ''){
            url += `?Mes=${dtBusca}`;
        }
        const response = await api.get(url);
        if(response.status == 200){
            setValorReceita(response.data.totalReceitas);
            setValorDespesa(response.data.totalDespesas);
            SetSaldo(response.data.saldo);
            setReceitas(response.data.receitas);
            setDespesas(response.data.despesas);
        }
        else{
            alert('Erro, Não foi Possível Buscar.');
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerBrand}>$ HomeMoney</Text>
                    <Text style={styles.headerText}>-</Text>
                    <TouchableOpacity onPress={navigateToHome}>
                        <FontAwesome name="arrow-left" size={30} color="#92278f" />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View>
                    <Text style={styles.headerTextRD}><FontAwesome name="search" size={20} color="#ffbe06" /> Busca</Text>
                </View>
                <View style={styles.dashBoard}>
                    <Text style={styles.InformText} >Informe o Mês e o Ano Para Buscar</Text>
                    <View style={styles.dashBoardHeader}>
                        <TextInput
                            style={styles.input}
                            keyboardType={'numeric'}
                            maxLength={7}
                            placeholder={"XX/XXXX"}
                            value={dtBusca}
                            onChangeText={text => maskInput(text)}
                            autoFocus={true}
                        />
                        <TouchableOpacity style={styles.action} onPress={() => Busca()}>
                            <FontAwesome name="search" size={25} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.receitas}>Total de Receitas</Text>
                        <Text style={styles.receitas}>{valorReceita}</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.despesas}>Total de Despesas</Text>
                        <Text style={styles.despesas}>{valorDespesa}</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.saldo}>Saldo</Text>
                        <Text style={styles.saldo}>{saldo}</Text>
                    </View>
                    <Text style={{ textAlign: "center", marginBottom: 5, color: '#737380' }}>______________________________________________</Text>
                    <FlatList
                        data={receitas}
                        keyExtractor={receita => String(receita.id)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item: receita }) => (
                            <View style={styles.dashBoardHeader}>
                                <Text style={styles.lancReceita}>{receita.nomeReceita}</Text>
                                <Text style={styles.lancReceita}></Text>
                                <Text style={styles.lancReceita}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(receita.valor)}</Text>
                            </View>
                        )}
                    />
                    <FlatList
                        data={despesas}
                        keyExtractor={despesa => String(despesa.id)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item: despesa }) => (
                            <View style={styles.dashBoardHeader}>
                                <Text style={styles.lancDespesa}>{despesa.nomeDespesa}</Text>
                                <Text style={styles.lancDespesa}></Text>
                                <Text style={styles.lancDespesa}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(despesa.valor)}</Text>
                            </View>
                        )}
                    />
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancSaldo}>Saldo Final</Text>
                        <Text style={styles.lancSaldo}>{saldo}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}