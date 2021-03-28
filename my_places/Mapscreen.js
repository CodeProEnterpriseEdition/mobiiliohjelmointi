import * as React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import{ Header, Icon, Input } from 'react-native-elements';

export default function DetailsScreen({ route, navigation }) {

    const {lat, lng} = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Text>lat: {lat} long: {lng}</Text>
            <MapView 
                style={styles.container}
                initialRegion={{
                    latitude: 60.200692,
                    longitude:24.934302,
                    latitudeDelta: 0.0322,
                    longitudeDelta:0.0221,}}
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0221,
                }}
            >
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        height:300, 
        width: 350,
    },
    input: {
        marginBottom: 10, 
        paddingHorizontal: 8, 
        paddingVertical: 6, 
        borderBottomWidth: 1, 
        borderBottomColor: '#ddd',
    }
});