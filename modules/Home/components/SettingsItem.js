'use strict';

import Colors from './Colors';

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class BigItem extends Component{
        render(){
          return (
                <View style={styles.bigItem}>
                        {preset.map(preset => (<Text style={styles.text}>{preset.name}</Text>))}
                </View>
          )
        };
}

class Item extends Component{
        render(){
          return (
                <View style={styles.item}></View>
          )
        };
}

const styles = StyleSheet.create({
        bigItem: {
          height: 150,
          padding: 5,
          marginTop: 10,
          marginBottom: 5,
          marginRight: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: Colors.lightest,
          backgroundColor: Colors.lightest
        },
        item: {
          height: 125,
          padding: 5,
          marginTop: 10,
          marginBottom: 5,
          marginRight: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: Colors.lightest,
          backgroundColor: Colors.lightest
        },
        text: {
          fontFamily: 'montserrat-bold',
          fontSize: 20,
          fontWeight: '500',
          color: Colors.black
        }
});

export { Item, BigItem };
