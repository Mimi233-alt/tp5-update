import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Maison') {
            icon = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Paramètres') {
            icon = focused ? 'settings' : 'settings-outline';
          }

          return <Icon name={icon} size={22} color={color} />;
        },

        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray"
      })}
    >
      <Tab.Screen name="Maison" component={HomeStack} />
      <Tab.Screen name="Paramètres" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
