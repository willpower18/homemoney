import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export default function Receitas(){
    const navigation = useNavigation();
    
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
                <Text style={styles.headerTextRD}><FontAwesome  name="plus" size={20} color="#00a651"/> Receitas Lançadas</Text>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Salário Will</Text>
                        <Text style={styles.titleDash}>R$ 2.500,00</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Salário Will</Text>
                        <Text style={styles.titleDash}>R$ 2.500,00</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Salário Will</Text>
                        <Text style={styles.titleDash}>R$ 2.500,00</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Salário Will</Text>
                        <Text style={styles.titleDash}>R$ 2.500,00</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Salário Will</Text>
                        <Text style={styles.titleDash}>R$ 2.500,00</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Salário Will</Text>
                        <Text style={styles.titleDash}>R$ 2.500,00</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}