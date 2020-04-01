import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import styles from './styles';

export default function Home(){
    const navigation = useNavigation();

    function navigateToReceitas(){
        navigation.navigate('Receitas');
    }
    
    function navigateToDespesas(){
        navigation.navigate('Despesas');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerBrand}>$ HomeMoney</Text>
                <Text style={styles.headerText}>04/2020</Text>
                <FontAwesome  name="home" size={30} color="#92278f"/>
            </View>
            <View style={styles.dashBoard}>
                <View style={styles.dashBoardHeader}>
                <Text style={styles.titleDash}>Receitas</Text>
                <FontAwesome name="plus" size={30} color="#00a651"/>
                </View>
                <Text style={styles.valueDash}>R$ 5.000,00</Text>
                <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToReceitas()}>
                    <Text style={styles.detailsButtonText}>Ver Lançamentos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dashBoard2}>
                <View style={styles.dashBoardHeader}>
                    <Text style={styles.titleDash2}>Despesas</Text>
                    <FontAwesome name="minus" size={30} color="#FF4206"/>
                </View>
                <Text style={styles.valueDash}>R$ 3.000,00</Text>
                <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDespesas()}>
                    <Text style={styles.detailsButtonText}>Ver Lançamentos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dashBoard2}>
                <View style={styles.dashBoardHeader}>
                    <Text style={styles.titleDashResult}>Saldo</Text>
                    <Entypo name="wallet" size={30} color="#ffbe06"/>                
                </View>
                <Text style={styles.valueDash}>R$ 2.000,00</Text>
            </View>
            <View style={styles.dashBoard2}>
                <View style={styles.lineButtons}>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <FontAwesome name="plus" size={30} color="#92278f"/>
                        <Text style={styles.actionText}>Lançar Receita</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <FontAwesome name="minus" size={30} color="#92278f"/>
                        <Text style={styles.actionText}>Lançar Despesa</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <FontAwesome name="search" size={30} color="#92278f"/>
                        <Text style={styles.actionText}>Efetuar Busca</Text>    
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}