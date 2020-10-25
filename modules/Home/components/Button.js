import React, { Component } from "react";
import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import Colors from './Colors';

const BrewButton = (): Node => {
        const navigation = useNavigation();

        return (
                <View style={styles.container}>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Brew')}>
                    <Text style={styles.text}>START BREW</Text>
                  </TouchableOpacity>
                </View>  
        )
};

const styles = StyleSheet.create({
  container: {
        justifyContent: "center",
        backgroundColor: Colors.white,
  },
  button: {
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        backgroundColor: Colors.black,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.black
  },
  text: {
        fontFamily: 'montserrat-bold',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 2,
        color: Colors.white,
  }
});
export default BrewButton;
