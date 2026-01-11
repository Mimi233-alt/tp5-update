// screens/NotificationsScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";
import AppBar from "../components/AppBar";

// Gestionnaire obligatoire pour Android
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function NotificationsScreen({ navigation }) {
  const requestPermission = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    alert(status === "granted" ? "Permission accordée" : "Permission refusée");
  };

  const sendTestNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: { title: "🔔 Notification locale", body: "Ceci est un test" },
      trigger: null, // immédiat
    });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <AppBar title="Notifications" back />
      <Button title="Demander permission" onPress={requestPermission} />
      <View style={{ marginTop: 15 }} />
      <Button title="Notification immédiate" onPress={sendTestNotification} />
    </View>
  );
}
