import React, { Component } from "react";
import { Button, Text, TouchableOpacity, View, ScrollView, StyleSheet, FlatList } from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';

import Colors from './Colors';
import Settings from './Settings';
import Socket from '../../../src/Socket'

import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Presets = [
        {
                key: '1',
                name: 'Chemex',
                coffee: 40,
                ratio: '16:1',
                water: 640,
                time: '2:30',
        },
        {
                key: '2',
                name: 'Kalita',
                coffee: 24,
                ratio: '16:1',
                water: 324,
                time: '2:30',
        },
]

var db = openDatabase({ name: '../../../esteban.db' });

class PresetList extends Component {
        
        constructor(props) {
                super(props);
                this.state = { selectedPreset: '1'};
        }

        _pressHandler = (key) => {
          this.setState(state => ({ selectedPreset: key }));
        }

        _renderItem(item){
                if (item.add){
                        return (
                          <View style={styles.addButton}>
                          <TouchableOpacity>
                            <EvilIcons name="plus" size={55}/>
                          </TouchableOpacity>
                          </View>
                        );
                }

                return (
                  <TouchableOpacity style={this.state.selectedPreset == item.key ? styles.listContainerSelected: styles.listContainer} 
                                    onPress={()=> this._pressHandler(item.key)}>
                    <View style={styles.gramContainer}><Text style={styles.text}>{item.coffee}g</Text></View>
                    <View style={styles.nameContainer}><Text style={styles.text}>{item.name}</Text></View>
                  </TouchableOpacity>
                )
        }

        _renderSeparator = () => {
                return (<View style={styles.separator}/>)
        }
        
        returnSelectedPreset = () => {
                index = this.state.selectedPreset;
                return Presets.filter(preset => preset.key === index)
        }
       
        render(){
                preset = this.returnSelectedPreset();

                return (
                  <>
                  <View style={styles.container}>
                    <FlatList 
                        horizontal
                        renderItem={({item}) => this._renderItem(item)} 
                        data={[...Presets, {add: true}]}
                        keyExtractor={item => item.key}
                        ItemSeparatorComponent={this._renderSeparator}
                    />
                  </View>
                
                  <View style={styles.settings}><Settings preset={this.state}/></View>
                  </>
                )
        } 
}

const styles = StyleSheet.create({
        container: {
                marginTop: 10,        
                height: "27%",
        },
        settings: {
                position: 'absolute',
                top: 230,
                left: 10, 
                right: 10, 
                bottom: 0,
        },
        separator: {
                height: 1,
                width: "2%",
                backgroundColor: Colors.white,
        },
        text: {
                fontFamily: 'montserrat',
                fontSize: 17,
                fontWeight: '500',
                color: Colors.black
        },
        listContainer: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 80,
                width: 175,
                backgroundColor: Colors.lightest,
                borderRadius:10,
                borderWidth: 1,
                borderColor: Colors.lightest
        },
        listContainerSelected: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 80,
                width: 175,
                backgroundColor: Colors.yellow,
                borderRadius:10,
                borderWidth: 1,
                borderColor: Colors.yellow
        },
        nameContainer: {
                margin: 10,
        },
        gramContainer: {
                height: 55,
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius:10,
                borderWidth: 1,
                borderColor: Colors.white,
                backgroundColor: Colors.white,
        },
        addButton: {
                paddingRight: 120, 
                justifyContent: 'center',
                alignItems: 'center',
        }
});

export default PresetList;
