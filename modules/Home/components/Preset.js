import React, { Component } from "react";
import type {Node} from 'react';
import { View, Text, FlatList, ScrollView} from "react-native";
import { List, ListItem } from "react-native-elements";

import PresetList from './List'

class PresetFlatList extends Component {
        render(): React.Node{
                return (
                  <PresetList />
                )
        }
}

export default PresetFlatList
