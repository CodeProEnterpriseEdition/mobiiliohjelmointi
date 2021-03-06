import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
//import { SQLite } from 'expo-sqlite';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('coursedb2.db');

export default function App() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists course (id integer primary key not null, amounts text, title text);');
    });
    updateList();    
  }, []);

  // Save course
  const saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into course (amounts, title) values (?, ?);', [amount, title]);    
      }, null, updateList
    )
  }

  // Update courselist
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from course;', [], (_, { rows }) =>
        setCourses(rows._array)
      ); 
    });
  }

  // Delete course
  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from course where id = ?;`, [id]);
      }, null, updateList
    )    
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder='Product' style={{marginTop: 30, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(title) => setTitle(title)}
        value={title}/>  
      <TextInput placeholder='Amount' keyboardType="numeric" style={{ marginTop: 5, marginBottom: 5,  fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(amount) => setAmount(amount)}
        value={amount}/>      
      <Button onPress={saveItem} title="Save" /> 
      <Text style={{marginTop: 30, fontSize: 20}}>Shopping List</Text>
      <FlatList 
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.title}, {item.amounts}</Text>
        <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => deleteItem(item.id)}> Bought</Text></View>} 
        data={courses} 
        ItemSeparatorComponent={listSeparator} 
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
listcontainer: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  alignItems: 'center'
  },
});