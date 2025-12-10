import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Paramètres ⚙️</Text>
      <Text style={styles.subtitle}>Personnalise ton expérience</Text>

      <View style={styles.section}>
        <Icon name="color-palette-outline" size={30} color="#4A90E2" />
        <Text style={styles.sectionText}>Thème et couleurs</Text>
      </View>

      <View style={styles.section}>
        <Icon name="notifications-outline" size={30} color="#4A90E2" />
        <Text style={styles.sectionText}>Notifications</Text>
      </View>

      <View style={styles.section}>
        <Icon name="shield-checkmark-outline" size={30} color="#4A90E2" />
        <Text style={styles.sectionText}>Sécurité & confidentialité</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#f2f4f7"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#003E78",
    marginTop: 15
  },
  subtitle: {
    fontSize: 16,
    color: "#6c7a91",
    marginBottom: 25
  },
  section: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    elevation: 3,
    marginBottom: 18
  },
  sectionText: {
    fontSize: 18,
    marginLeft: 15,
    color: "#003E78",
    fontWeight: "600"
  }
});
