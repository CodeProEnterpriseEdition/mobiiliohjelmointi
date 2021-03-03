import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function App() {

  const [adress, setAdress] = useState();
  const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=f0lcpkcNsRTGODcLI7Nvg3V35eFz88xj&location=Helsinki';
  const [lat, setLat] = useState(60.201373)
  const [lng, setLng] = useState(24.934041)

  const changeHandler = (value) => {
      setAdress(value);
  }

  function getAddress(){
    fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=f0lcpkcNsRTGODcLI7Nvg3V35eFz88xj&location=${adress}`)
    .then(response => response.json())
    .then(data => {
      console.log('---------------------')
      setLat(data.results[0].locations[0].latLng.lat)
      console.log(data.results[0].locations[0].latLng.lat)
      setLng(data.results[0].locations[0].latLng.lng)
      console.log(data.results[0].locations[0].latLng.lng)
      //setResult(data.results[0].question);
      //setReady(true);
    })
    .catch(err => console.error(err))
  }

  return (
    <View style={styles.container}>
      <Text>Kartta</Text>
      <MapView        
        style={{flex: 1, height:10, width: 350,}}
        initialRegion={{
          latitude: 60.201373,
          longitude: 24.934041,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        }}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        }}
        >
      <Marker coordinate={{latitude:60.201373, longitude: 24.934041}}title='Haaga-Helia'/>
      </MapView>
      <TextInput 
        style={styles.input}
        placeholder='Give address here'
        onChangeText={changeHandler}
      />
      <Text>{adress}lat:{lat}long:{lng}</Text>
      <Button 
      onPress={() => getAddress(adress)}
      title="Find Address"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  input: {
    marginBottom: 10, 
    paddingHorizontal: 8, 
    paddingVertical: 6, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd',
  }
});
