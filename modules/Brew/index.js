'use strict';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, StatusBar, Text ,View} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from './components/Colors'

const Brew : () => React$Node = () => {
        const navigation = useNavigation();

        return (
          <>
          <StatusBar barStyle="dark-content" />
            <View style={styles.body}>
                <Text style={styles.text}>Brewing</Text>
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>    
          </>
        )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.yellow,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"
  },
  text: {
    fontFamily: 'montserrat-bold',
    fontSize: 40,
    fontWeight: '500',
    color: Colors.black
  }
});

export default Brew;
