import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Image} from 'react-native';

export default function App() {

  const miinus= () =>{
    let tulos = Number(field) - Number(field2);
    setResult(tulos);
    const text = `${field} - ${field2} = ${tulos}`;
    setData([...data, {key: text}]);
    setField('')
    setField2('')
  }
  // testi
  const plussa= () =>{
    let tulos = Number(field) + Number(field2);
    setResult(tulos);
    const text = `${field} + ${field2} = ${tulos}`;
    setData([...data, {key: text}]);
    setField('')
    setField2('')
  }

  const [result, setResult] = useState('');
  const [field, setField] = useState('');
  const [field2, setField2] = useState('');
  const [data, setData] = useState([]);
  //const [data, setData] = useState([]);

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
        <Button style={styles.button} onPress={plussa} title="+"/>
        <Button style={styles.button} onPress={miinus} title="-"/>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => 
            <Text>{item.key}</Text>}
      />
  

    </View>
  );
}

/*

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  input: {
    width:200, 
    borderColor:'gray', 
    borderWidth:1,
    margin: 5,
  }, 
  operators: {
    flexDirection:'row', 
    margin: 5,
  },
  button: {
    margin: 5,
  }
});
