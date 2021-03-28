
import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import{ Header, Icon, Input } from 'react-native-elements';

import Mapscreen from "./Mapscreen";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Header leftComponent={{ icon:'menu', color: '#fff' }}
        centerComponent={{ text:'Show places', style:{ color: '#fff' } }}
        rightComponent={{ icon:'home', color: '#fff' }}/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen name="Details" component={Mapscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  page: { 
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;