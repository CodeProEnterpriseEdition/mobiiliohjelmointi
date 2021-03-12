import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState('Hehe')

  const changeHandler = (value) => {
    setText(value)
  }
  
  function speak(){
    console.log(text);
    Speech.speak(text);
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Give text here'
        onChangeText={changeHandler}
      />
      <Button 
        title="Press to hear text"
        onPress={() => speak(text)}
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
  input: {
    marginBottom: 10, 
    paddingHorizontal: 8, 
    paddingVertical: 6, 
    borderWidth: 3,
    borderColor: 'green'
  }
});
