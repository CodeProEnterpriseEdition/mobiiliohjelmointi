import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [teksti, setTeksti] = useState('');
  const [items, setItem] = useState([]);
  
  

  const talleta = () =>{
    setItem([...items, { key: String(items.length), text: teksti}]);
    setTeksti('');
  }
  const clear = () =>{
    setItem([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        onChangeText={text => setTeksti(text)}
        value={teksti}
      />
      
      <Text>{teksti}</Text>
      <View style={styles.buttons}>
        <Button style={styles.button} title='ADD' onPress={talleta}></Button>
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} title='CLEAR' onPress={clear}></Button>
      </View>

      <Text style= {styles.otsikko}>Shopping list</Text>
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
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
    borderWidth: 1,
    marginTop: 30,
    margin: 10,
    width: 100, 
    height: 30, 
  },
  otsikko: {
    margin: 30,
    fontSize: 30,
    color: 'red',
  }, 
  button: {
    margin: 10, 
  }, 
  buttons: {
    margin: 10,
  }
});
