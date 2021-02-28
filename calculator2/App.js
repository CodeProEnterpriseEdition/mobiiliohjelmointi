import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image} from 'react-native';

export default function App() {

  const miinus= () =>{
    setResult(Number(field) - Number(field2));
    setField('')
    setField2('')
  }

  const plussa= () =>{
    setResult(Number(field) + Number(field2));
    setField('')
    setField2('')
  }

  const [result, setResult] = useState('');
  const [field, setField] = useState('');
  const [field2, setField2] = useState('');
  
  return (
    
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput style={styles.input}
        keyboardType= 'number-pad'
        onChangeText={text=> setField(text)}
        value={field}/>
      <TextInput style={{width:200, borderColor:'gray', borderWidth:1}}
        keyboardType= 'number-pad'
        onChangeText={text=> setField2(text)}
        value={field2}/>
      <View style={styles.operators}>
        <Button onPress={plussa} title="+"/>
        <Button onPress={miinus} title="-"/>
      </View>

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
  input: {
    width:200, 
    borderColor:'gray', 
    borderWidth:1,
  }, 
  operators: {
  flexDirection:'row', 
  alignItems:'center',
  },
});
