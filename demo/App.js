import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image} from 'react-native';

export default function App() {
  const buttonPressed= () =>{
    Alert.alert('Yout typed ' + text);
  }
  const [text, setText] = useState('');
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>This is mine!</Text>
      <StatusBar style="auto" />
      <Button onPress={buttonPressed}title="Press me"/>
      <TextInput style={{width:200, borderColor:'gray', borderWidth:1}}
        onChangeText={text=> setText(text)}
        value={text}/>
      <Text style={styles.alerttext}> Red text </Text>
      <Image style={{  width:300, height:120 }}
      source={require('./sunset.jpg')}  />
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
  alerttext: { 
    fontSize: 18, 
    color: 'red' 
  },
});
