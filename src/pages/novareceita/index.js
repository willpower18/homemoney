import React, { useState } from 'react';
import { View,TextInput, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export default function NovaReceita(){
    //Estado da Aplicação
    const [nomeReceita, setNomeReceita] = useState('');
    const [dataLancamento, setDataLancamento] = useState('');
    const [valor, setValor] = useState('');

    //Navegação
    const navigation = useNavigation();
    
    function navigateToHome(){
        navigation.navigate('Home');
    }
    //Retorno da Função
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
                <Text style={styles.headerTextRD}><FontAwesome  name="plus" size={20} color="#00a651"/> Nova Receita</Text>
                <View style={styles.dashBoard}>
                    <Text style={styles.InformText} >Informe os Dados Abaixo</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType={'default'}
                        maxLength={100}
                        placeholder={"Nome da Receita"}
                        value={nomeReceita}
                        autoCompleteType={"off"}
                        onChangeText={text => setNomeReceita(text)}
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