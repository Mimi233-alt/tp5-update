import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>Mon Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 90,
    backgroundColor: '#665611ff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  title: { color: '#fff', fontSize: 30, fontWeight: 'bold' },
});