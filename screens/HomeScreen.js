// screens/HomeScreen.js
import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, Modal, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import AppBar from "../components/AppBar";
import * as SQLite from "expo-sqlite";

// Initialiser SQLite
const dbSQLite = SQLite.openDatabase("todos.db");

export default function HomeScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  // Création de la table SQLite si pas existante
  useEffect(() => {
    dbSQLite.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS todos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          createdAt INTEGER
        );`
      );
    });
  }, []);

  // Charger Firestore + SQLite
  const loadTodos = async () => {
    // Firestore
    if (user) {
      const snap = await getDocs(collection(db, "users", user.uid, "todos"));
      const remoteTodos = snap.docs.map(d => ({ id: d.id, title: d.data().title }));

      // Sauvegarde dans SQLite
      dbSQLite.transaction(tx => {
        tx.executeSql("DELETE FROM todos;");
        remoteTodos.forEach(t => {
          tx.executeSql("INSERT INTO todos (title) VALUES (?)", [t.title]);
        });
      });

      // Charger SQLite
      dbSQLite.transaction(tx => {
        tx.executeSql("SELECT * FROM todos", [], (_, { rows }) => {
          setTodos(rows._array);
        });
      });
    }
  };

  useEffect(() => {
    if (user) loadTodos();
  }, [user]);

  const addTodo = async () => {
    if (!newTodo.trim()) return;

    // Firestore
    await addDoc(collection(db, "users", user.uid, "todos"), {
      title: newTodo,
      completed: false,
      createdAt: Date.now(),
    });

    setNewTodo("");
    setModalVisible(false);
    loadTodos();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <AppBar title="Mes tâches" />
      <View style={{ padding: 16 }}>
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={{ color: theme.primary }}>Changer thème</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout} style={{ marginTop: 10 }}>
          <Text style={{ color: "red" }}>Déconnexion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginVertical: 15, backgroundColor: theme.primary, padding: 12, borderRadius: 8 }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>+ Ajouter une tâche</Text>
        </TouchableOpacity>

        <FlatList
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: theme.card, padding: 12, borderRadius: 8, marginBottom: 10 }}>
              <Text style={{ color: theme.text }}>{item.title}</Text>
            </View>
          )}
        />
      </View>

      {/* MODAL */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", padding: 20 }}>
          <View style={{ backgroundColor: theme.background, padding: 20, borderRadius: 10 }}>
            <Text style={{ color: theme.text, fontSize: 18 }}>Nouvelle tâche</Text>
            <TextInput
              placeholder="Titre de la tâche"
              value={newTodo}
              onChangeText={setNewTodo}
              style={{ borderWidth: 1, borderColor: "#ccc", marginVertical: 10, padding: 10, borderRadius: 6, color: theme.text }}
            />
            <TouchableOpacity onPress={addTodo} style={{ backgroundColor: theme.primary, padding: 10, borderRadius: 6 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Ajouter</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ textAlign: "center", marginTop: 10 }}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
