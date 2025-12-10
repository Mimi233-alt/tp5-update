import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Bienvenue 👋</Text>
      <Text style={styles.subtitle}>Explore l'application avec un design moderne</Text>

      {/* CARD */}
      <View style={styles.card}>
        <Icon name="home-outline" size={50} color="#4A90E2" />
        <Text style={styles.cardTitle}>Écran d'accueil</Text>
        <Text style={styles.cardText}>Accède aux détails de manière fluide et moderne.</Text>
      </View>

      {/* BOUTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Détails", { id: 99 })}
      >
        <Text style={styles.buttonText}>Voir les détails</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#f2f4f7",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#003E78",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#6c7a91",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    marginBottom: 30,
    alignItems: "center"
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#003E78",
    marginTop: 15,
  },
  cardText: {
    fontSize: 15,
    color: "#6c7a91",
    marginTop: 5,
    textAlign: "center"
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    elevation: 4
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700"
  },
});
