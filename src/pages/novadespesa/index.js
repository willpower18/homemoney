import React, { useState } from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export default function NovaReceita(){
    //Estado da Aplicação
    //Estado da Aplicação
    const [nomeDespesa, setNomeDespesa] = useState('');
    const [dataLancamento, setDataLancamento] = useState('');
    const [valor, setValor] = useState('');
    //Navegação
    const navigation = useNavigation();
    
    function navigateToHome(){
        navigation.navigate('Home');
    }
    //Retorno do componente
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerBrand}>$ HomeMoney</Text>
                <Text style={styles.headerText}>04/2020</Text>
                <TouchableOpacity onPress={navigateToHome}>
                    <FontAwesome  name="arrow-left" size={30} color="#92278f"/>
                </TouchableOpacity>
            </View>
            <ScrollView keyboardDismissMode="interactive" showsVerticalScrollIndicator={false}>
                <Text style={styles.headerTextRD}><FontAwesome  name="minus" size={20} color="#FF4206"/> Nova Despesa</Text>
                <View style={styles.dashBoard}>
                    <Text style={styles.InformText} >Informe os Dados Abaixo</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType={'default'}
                        maxLength={100}
                        placeholder={"Nome da Despesa"}
                        value={nomeDespesa}
                        autoCompleteType={"off"}
                        onChangeText={text => setNomeDespesa(text)}
                    />
                    <TextInputMask
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={dataLancamento}
                        onChangeText={text => {
                            setDataLancamento(text)
                        }}
                        style={styles.input}
                        placeholder={"DD/MM/YYYY"}
                    />
                    <Text style={{fontSize:12,marginBottom:5}}>* Deixe a data em branco para lançamentos do dia</Text>
                    <TextInputMask
                        type={'money'}
                        options={{
                          precision: 2,
                          separator: ',',
                          delimiter: '.',
                          unit: 'R$',
                          suffixUnit: ''
                        }}
                        value={valor}
                        onChangeText={text => {
                            setValor(text)
                        }}
                        style={styles.input}
                        placeholder={"R$"}
                    />
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <FontAwesome name="check" size={25} color="#fff" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        
    );
}