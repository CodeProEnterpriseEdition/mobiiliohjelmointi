import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function App() {

  let rand;
  useEffect(() => {
    getRandom();
  }, [])
  const getRandom= () => {
    rand = Math.floor(Math.random() * 100) + 1;
    setRandom(rand);
  }
  const [guess, setGuess] = useState(0);
  const [random, setRandom] = useState();
  const [guesses, setGuesses] = useState(0);

  const buttonPressed= () => {
    
    setGuesses(Number(guesses) + 1)
      if(guess==random){
        Alert.alert(`You Guessed the number in ${guesses} guesses`)
        setGuesses(0)
        getRandom()
      }
      setGuess('')
  } 

  return (
    <View style={styles.container}>

      <Text>{random} </Text>
      <Text>{guess} guesses: {guesses}</Text>
      <Text>Guess a number between 1-100</Text>
      <TextInput style={styles.input} 
        onChangeText={text=> setGuess(text)}
        value={guess}></TextInput>
      <Button title='MAKE A GUESS' 
        onPress={buttonPressed}></Button>
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
    width: 110,
    height: 30,
    borderColor:'gray', 
    borderWidth:1,
    margin: 10,
  }
});
