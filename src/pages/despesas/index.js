import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export default function Despesas(){
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
                <Text style={styles.headerTextRD}><FontAwesome  name="minus" size={20} color="#FF4206"/> Despesas Lançadas</Text>
            </View>
            <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Internet</Text>
                        <Text style={styles.titleDash}>R$ 79,90</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Internet</Text>
                        <Text style={styles.titleDash}>R$ 79,90</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Internet</Text>
                        <Text style={styles.titleDash}>R$ 79,90</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Internet</Text>
                        <Text style={styles.titleDash}>R$ 79,90</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Internet</Text>
                        <Text style={styles.titleDash}>R$ 79,90</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Internet</Text>
                        <Text style={styles.titleDash}>R$ 79,90</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome  name="trash" size={20} color="#92278f"/>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    );
}