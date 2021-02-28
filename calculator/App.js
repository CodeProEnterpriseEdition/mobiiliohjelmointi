import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image} from 'react-native';

export default function App() {

  const buttonPressed= () =>{
    Alert.alert('Yout typed ' + text);
  }
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  return (
    <View style={styles.container}>
      <Text>{text}</Text><Text>{text2}</Text>
      
      <TextInput style={{width:300, borderColor:'gray', borderWidth:1}}
        onChangeText={text=> setText(text)}
        value={text}/>
      <TextInput style={{width:200, borderColor:'gray', borderWidth:1}}
        onChangeText={text2=> setText2(text2)}
        value={text2}/>

      <Button styles={[styles.button]} onPress={buttonPressed}title="-"/>
      <Button onPress={buttonPressed} title="+"/>
      
      <View style={[styles.buttoncontainer]}>
        <View style={[styles.buttonblock]}>
            <Button title='1'></Button>
            <Button title='2'></Button>
            <Button title='3'></Button>
            <Button title='/'></Button>
        </View>
        <View style={[styles.buttonblock]}>
            <Button title='4'></Button>
            <Button title='5'></Button>
            <Button title='6'></Button>
        </View>
        <View style={[styles.buttonblock]}>
            <Button title='7'></Button>
            <Button title='8'></Button>
            <Button title='9'></Button>
        </View>
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  buttoncontainer: {
    
  },
  buttonblock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 50, 
    height: 50, 
    backgroundColor: 'powderblue'
  }
});
