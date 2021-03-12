import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {

  const [contact, setContact] = useState({});

  const getContacts= async() => {
    const{ status} = await Contacts.requestPermissionsAsync();
    console.log("data")
    if (status=== 'granted'){
      console.log("granted")
      const{ data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
      
      console.log(data)
      if (data.length > 0) {
        console.log(data[0])
        console.log("data")
        setContact(data[0]);
      }
    }
  }
  
  
  return (
    <View style={styles.container}>
      <Text>Hemuli</Text>
      <Text>{contact.name}</Text>
      <Button title="GetContact" onPress={getContacts} />
      
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
});

/* 
"phoneNumbers": Array [
  Object {
      "id": "1",
      "isPrimary": 0,
      "label": "mobile",
      "number": "1 234-566-985",
      "type": "2",
  },
], */