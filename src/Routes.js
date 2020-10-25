import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../modules/Home'
import Brew from '../modules/Brew'
import Socket from './Socket'

const Stack = createStackNavigator();

function SocketPage() {
        return ( <Socket/> )
}

function HomePage() {
        return ( <Home/> )
}

function BrewPage() {
        return ( <Brew/> )
}

const Routes: () => React$Node = () => {
        return (
                <NavigationContainer>
                  <Stack.Navigator 
                      screenOptions={{
                      headerShown: false
                    }}>
                    <Stack.Screen name="Home" component={HomePage}/>
                    <Stack.Screen name="Brew" component={BrewPage}/>
                    <Stack.Screen name="Socket" component={SocketPage}/>
                  </Stack.Navigator>
                </NavigationContainer>
        )
}

export default Routes;
