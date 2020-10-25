'use strict';
import React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Header from './components/Header'
import PresetList from './components/List'
import Colors from './components/Colors'
import BrewButton from './components/Button'
import Settings from './components/Settings'

const Home : () => React$Node = () => {
        
        return (
		<>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.body}>
                  <Header/>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.sectionTitle}>Choose a preset</Text>
                        <PresetList/>
                        <BrewButton/>
                    </View>
                </SafeAreaView> 
        	</>
	);
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontFamily: 'montserrat-bold',
    fontSize: 20,
    fontWeight: '500',
    color: Colors.black,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default Home;
