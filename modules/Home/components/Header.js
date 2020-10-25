'use strict';
import React from 'react';
import type {Node} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from './Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Header = (): Node => {
       
        const navigation = useNavigation();

        return (
        <View style={styles.body}>
          
          <View style={styles.row}>
            <Text>{' '}</Text>
            <View style={styles.coffee}><MaterialCommunityIcons name="coffee-outline" size={40}/></View> 
            <TouchableOpacity style={styles.gear} onPress={() => navigation.navigate('Socket')}><EvilIcons name="gear" size={40}/></TouchableOpacity> 
          </View>
          
          <View style={styles.sectionContainer}><Text style={styles.text}>Good morning.</Text></View>
        
        </View>
        )
};

const styles = StyleSheet.create({
        body: {
                backgroundColor: Colors.white 
        },
        row: {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center',
        },
        coffee: {
                paddingLeft: 44,
                marginTop: 40,
                marginBottom: 10,
        },
        gear: {
                resizeMode: 'contain',
                paddingRight: 30,
                marginTop: 40,
                marginBottom: 10,
        },
        sectionContainer: {
                marginTop: 10,
                paddingHorizontal: 15,
        },
        text: {
                fontFamily: 'montserrat-bold',
                fontSize: 35,
                fontWeight: '500',
                color: Colors.black
        }
});

export default Header;
