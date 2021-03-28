
return (
    <View>
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
    </View>
)