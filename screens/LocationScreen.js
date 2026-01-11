import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import * as Location from "expo-location";
import AppBar from "../components/AppBar";

export default function LocationScreen({ navigation }) {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission refusée");
      return;
    }
    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <AppBar title="Localisation" back />
      <Button title="📍 Obtenir position" onPress={getLocation} />
      {location && (
        <Text style={{ marginTop: 20 }}>
          Lat: {location.latitude} | Lng: {location.longitude}
        </Text>
      )}
    </View>
  );
}