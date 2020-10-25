'use strict';

import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Colors from './Colors';
import PresetList from './List';
import { Item, BigItem } from './SettingsItem';
import Socket from '../../../src/Socket';

class Settings extends Component{

        render(){
          return (
                <View>
                  <Text style={styles.titleText}>Brew Settings</Text>
                  
                  <View style={styles.row}>
                    <View style={styles.column}>
                      
                      <View style={styles.bigItem}>
                        <MaterialCommunityIcons style={styles.icon} name="scale-bathroom" size={30}/>
                        <View><Text style={styles.bigText}><Socket/>g</Text></View>
                        <Text style={styles.titleText}>Coffee Beans</Text>
                      </View> 
                      
                      <View style={styles.item}>
                        <EvilIcons style={styles.icon} name="clock" size={30}/>
                        {preset.map(preset => (<Text style={styles.text}>{preset.time}</Text>))}
                        <Text style={styles.titleText}>Time</Text>
                      </View> 
                      
                      <View style={styles.item}>
                        <MaterialCommunityIcons style={styles.icon} name="flower-tulip-outline" size={27}/>
                        <Text style={styles.titleText}>Bloom Time</Text>
                        <Text style={styles.text}>:30</Text>
                      </View> 
                    
                    </View>
                  
                    <View style={styles.column}>
                      
                      <View style={styles.item}>
                        <MaterialCommunityIcons style={styles.icon} name="water-outline" size={30}/>
                        {preset.map(preset => (<Text style={styles.text}>{preset.water}g</Text>))}
                        <Text style={styles.titleText}>Water</Text>
                      </View> 
                      
                      <View style={styles.item}>
                        <Feather style={styles.icon} name="percent" size={25} />
                        {preset.map(preset => (<Text style={styles.text}>{preset.ratio}</Text>))}
                        <Text style={styles.titleText}>Ratio</Text>
                      </View> 
                      
                      <TouchableOpacity style={styles.bigItem}>
                        <FontAwesome5 style={styles.icon} name="wifi" size={25} />
                        <Text style={styles.bigText}>On</Text>
                        <Text style={styles.titleText}>WiFi Mode</Text>
                      </TouchableOpacity> 
                    
                    </View>
                  </View>
                </View>
          )
        };
};

const styles = StyleSheet.create({
        row: {
          flex: 1,
          width: "100%",
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        },
        column: {
          flexDirection: 'column',
          width: "50%",
        },
        bigItem: {
          height: 150,
          marginTop: 5,
          marginBottom: 5,
          marginRight: 10,
          marginLeft: 5,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: Colors.lightest,
          backgroundColor: Colors.lightest,
          justifyContent: 'center',
          alignItems: 'flex-start',
        },
        item: {
          height: 130,
          marginTop: 5,
          marginBottom: 5,
          marginRight: 5,
          marginLeft: 5,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: Colors.lightest,
          backgroundColor: Colors.lightest,
          justifyContent: 'center',
          alignItems: 'flex-start',
        },
        icon: {
                position: 'absolute',
                top: 0,
                padding: 10,
        },
        titleText: {
          fontFamily: 'montserrat-bold',
          fontSize: 20,
          fontWeight: '500',
          color: Colors.black,
          padding: 10,
          position: 'absolute',
          bottom: 0,
          letterSpacing: 1,
        },
        bigText: {
          fontFamily: 'montserrat-bold',
          fontSize: 60,
          fontWeight: '700',
          color: Colors.black,
          padding: 10,
          letterSpacing: 1,
        },
        text: {
          fontFamily: 'montserrat-bold',
          fontSize: 40,
          fontWeight: '500',
          color: Colors.black,
          padding: 10,
          letterSpacing: 1,
        }
});

export default Settings;
