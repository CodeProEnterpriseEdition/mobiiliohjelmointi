import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';

export default function App() {

  const [location, setLocation] = useState(null);  
  const [lat, setLat] = useState(60.201373)
  const [lng, setLng] = useState(24.934041)

  useEffect(() => {
    console.log("aloitetaas")
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    console.log("location 1")
    console.log(status)
    
    if (status !== 'granted') {
      Alert.alert('No permissionto accesslocation');
    }
    else { 
      console.log("location 2")
      Location.getCurrentPositionAsync({accuracy: 6})
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    }
  };

  function set(){
    setLat(location.coords.latitude)
    setLng(location.coords.longitude)
  }
    return (
      <View style={styles.container}>
        <MapView        
            style={{flex: 1, height:10, width: 350,}}
            region={{
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.0322,
              longitudeDelta: 0.0221,
            }}
        >
        <Marker coordinate={{latitude:lat, longitude: lng}}title='Haaga-Helia'/>
        </MapView>
        <Text>latitude: {lat} longitude: {lng}</Text>
        <Button 
          title='Locate Me'
          onPress={() => set()}
        ></Button>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

