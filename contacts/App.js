import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {

  const [contact, setContact] = useState({});

  const getContacts= async() => {
    const{ status} = await Contacts.requestPermissionsAsync();
    if (status=== 'granted'){
      const{ data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
      if (data.length > 0) {
        setContact(data);
      }
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contacts</Text>
      <Button title="GetContacts" onPress={getContacts} />
      <FlatList
        style={styles.flatlist}
        data = {contact}
        renderItem={({item}) => <Text>{item.name}   {item.phoneNumbers[0].number}</Text>}
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
  flatlist: {
    flex: 1,
  }, 
  text: {
    flex: 1,
    maxHeight: 40,
    marginTop: 30,
  }
});
