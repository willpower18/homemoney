import React, { useState } from 'react';
import { View, ScrollView, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export default function Busca() {
    const navigation = useNavigation();
    const [dtBusca, setDtBusca] = useState('');

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

    function Busca() {
        alert('Foi');
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerBrand}>$ HomeMoney</Text>
                    <Text style={styles.headerText}>04/2020</Text>
                    <TouchableOpacity onPress={navigateToHome}>
                        <FontAwesome name="arrow-left" size={30} color="#92278f" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView keyboardDismissMode={'interactive'} showsVerticalScrollIndicator={false}>
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
                        <Text style={styles.receitas}>R$ 5.000</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.despesas}>Total de Despesas</Text>
                        <Text style={styles.despesas}>R$ 3.000</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.saldo}>Saldo</Text>
                        <Text style={styles.saldo}>R$ 2.000</Text>
                    </View>
                    <Text style={{ textAlign: "center", marginBottom: 5, color: '#737380' }}>______________________________________________</Text>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancReceita}>Salario Will</Text>
                        <Text style={styles.lancReceita}>R$ 2.500</Text>
                        <Text style={styles.lancReceita}>-</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancReceita}>Salario Will</Text>
                        <Text style={styles.lancReceita}>R$ 2.500</Text>
                        <Text style={styles.lancReceita}>-</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancReceita}>Salario Will</Text>
                        <Text style={styles.lancReceita}>R$ 2.500</Text>
                        <Text style={styles.lancReceita}>-</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancReceita}>Salario Will</Text>
                        <Text style={styles.lancReceita}>R$ 2.500</Text>
                        <Text style={styles.lancReceita}>-</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancReceita}>Salario Will</Text>
                        <Text style={styles.lancReceita}>R$ 2.500</Text>
                        <Text style={styles.lancReceita}>-</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancReceita}>Salario Will</Text>
                        <Text style={styles.lancReceita}>R$ 2.500</Text>
                        <Text style={styles.lancReceita}>-</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancDespesa}>Internet</Text>
                        <Text style={styles.lancDespesa}>-</Text>
                        <Text style={styles.lancDespesa}>R$ 79,90</Text>
                    </View>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.lancSaldo}>Saldo Final</Text>
                        <Text style={styles.lancSaldo}>R$ 2.431,10</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}