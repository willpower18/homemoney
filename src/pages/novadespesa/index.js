import React, { useState } from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

import api from '../../services/api';

export default function NovaReceita(){
    const navigation = useNavigation();
    const route = useRoute();
    //Estado da Aplicação
    const [referencia, setReferencia] = useState(route.params.referencia);
    const [nomeDespesa, setNomeDespesa] = useState('');
    const [dataLancamento, setDataLancamento] = useState('');
    const [valor, setValor] = useState('');

    //Manipulação de Dados da Aplicação
    async function addDespesa(){
        if(nomeDespesa == '' | valor == ''){
            alert('Preencha os campos Nome da Receita e Valor!');
            return false;
        }
        else{
            var formatedData = "";
            if(dataLancamento == ''){
                var dtHoje = new Date();
                const JsonDate = dtHoje.toJSON();
                formatedData = JsonDate;
            }
            else{
                formatedData = dataLancamento.substr(6,4);
                formatedData += "-";
                formatedData += dataLancamento.substr(3,2);
                formatedData += "-";
                formatedData += dataLancamento.substr(0,2);
                formatedData += "T00:00:00Z";
            }
            
            var formatedValue = valor.replace('R','');
            formatedValue = formatedValue.replace('$','');
            formatedValue = formatedValue.replace('.','');
            formatedValue = formatedValue.replace(',','.');
            var valorFloat = parseFloat(formatedValue);
            const data = {
                Id: "",
                NomeDespesa: nomeDespesa,
                DtLancamento: formatedData,
                Valor: valorFloat
            };
            const response = await api.post('api/despesas',data);
            if(response.status == 200){
                alert('Despesa Lançada com Sucesso!');
                setNomeDespesa('');
                setDataLancamento('');
                setValor('');
            }
            else{
                alert('Não foi possível cadastrar.');
            }
        }
    }

    //Navegação
    function navigateToHome(){
        navigation.navigate('Home');
    }
    //Retorno do componente
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerBrand}>$ HomeMoney</Text>
                <Text style={styles.headerText}>{referencia}</Text>
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
                    <TouchableOpacity style={styles.action} onPress={() => addDespesa()}>
                        <FontAwesome name="check" size={25} color="#fff" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        
    );
}