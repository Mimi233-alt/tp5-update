import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";

export default function TooListScreen() {
  return (
    <View style={styles.container}>
      {/* AppBar en haut */}
      <AppBar title="Mes tâches" />

      {/* Liste des tâches */}
      <FlatList
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
