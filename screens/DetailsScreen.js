import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DetailsScreen({ route }) {
  const id = route.params?.id;

  return (
    <View style={styles.container}>
      
      <Icon name="document-text-outline" size={60} color="#4A90E2" />

      <Text style={styles.title}>Détails</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>ID reçu :</Text>
        <Text style={styles.infoValue}>{id}</Text>
      </View>

      <Text style={styles.footer}>Écran stylisé avec un design moderne ✨</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f2f4f7"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "#003E78"
  },
  infoBox: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    elevation: 4,
    width: "80%",
    alignItems: "center"
  },
  infoLabel: {
    fontSize: 16,
    color: "#6c7a91",
  },
  infoValue: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4A90E2",
    marginTop: 8
  },
  footer: {
    fontSize: 14,
    marginTop: 25,
    color: "#6c7a91"
  }
});
