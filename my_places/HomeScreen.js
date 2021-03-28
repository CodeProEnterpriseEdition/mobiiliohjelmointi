import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import{ Header, Icon, Input } from 'react-native-elements';
import* as SQLite from 'expo-sqlite';

export default function HomeScreen({ navigation }) {
    const [address, setAddress] = useState();
    const [location, setLocation] = useState(null);  
    const [lat, setLat] = useState(60.201373) 
    const [lng, setLng] = useState(24.934041)
    const [cordinates, setCordinates] = useState([{lat:'', lng: ''}]);

    useEffect(() => {
        console.log("aloitetaas")
        getLocation();
        setCordinates({lat, lng});
    }, []);
    
    const changeHandler = (value) => {
        setAddress(value);
    }
    function getAddress(){
        fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=f0lcpkcNsRTGODcLI7Nvg3V35eFz88xj&location=${address}`)
        .then(response => response.json())
        .then(data => {
            console.log('---------------------')
            setLat(data.results[0].locations[0].latLng.lat)
            console.log(data.results[0].locations[0].latLng.lat)
            setLng(data.results[0].locations[0].latLng.lng)
            console.log(data.results[0].locations[0].latLng.lng)
        })
        .catch(err => console.error(err))
    }

    const getLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        console.log("location 1")
        console.log(status)
        
        if (status !== 'granted') {
            Alert.alert('No permissi onto access location');
        }
        else { 
            console.log("location 2")
            Location.getCurrentPositionAsync({accuracy: 6})
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location)
        }
    };

    return (
        <View style={styles.page}>
            <Text>Home Screen</Text>
            <Button
            title="Go to location"
            onPress={() => navigation.navigate('Details', {
                lat: lat,
                lng: lng,
            })}
            />
            <Input 
                style={styles.input}
                placeholder='Give address here'
                onChangeText={changeHandler}
            />
            <Button 
                type="material" name="addchart" 
                onPress={() => getAddress(address)}
                title="Save"
            />
        </View>
        );
    }

const styles = StyleSheet.create({
    page: { 
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        }
    })