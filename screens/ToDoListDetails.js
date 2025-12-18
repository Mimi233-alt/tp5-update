import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ToDoListDetails() {
  return (
    <View style={styles.container}>
      <Text>Détails de la liste de tâches</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
