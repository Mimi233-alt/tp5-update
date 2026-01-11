// screens/NativeFeaturesScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";

export default function NativeFeaturesScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <AppBar title="Fonctionnalités natives" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Caméra")}>
        <Text>📷 Caméra</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Localisation")}>
        <Text>📍 Géolocalisation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Contacts")}>
        <Text>👥 Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Notifications")}>
        <Text>🔔 Notifications</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});
