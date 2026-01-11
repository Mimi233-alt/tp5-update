import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import * as Contacts from "expo-contacts";
import AppBar from "../components/AppBar";

export default function ContactsScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Permission refusée");
      return;
    }
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name],
    });
    setContacts(data);
  };

  return (
    <View style={{ flex: 1 }}>
      <AppBar title="Contacts" back />
      <Button title="👥 Charger contacts" onPress={loadContacts} />
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={{ padding: 5 }}>{item.name}</Text>}
      />
    </View>
  );
}