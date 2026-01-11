import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useTodoStore } from "../store/useTodoStore";
import AppBar from "../components/AppBar";

export default function TodoListScreen({ navigation }) {
  const { todos, addTodo } = useTodoStore();

  useEffect(() => {
    addTodo({ id: 1, title: "Faire les courses" });
    addTodo({ id: 2, title: "Sortir le chien" });
    addTodo({ id: 3, title: "Coder une app RN" });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppBar title="Mes tâches" />

      <FlatList
        data={todos}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
         <TouchableOpacity
  onPress={() =>
    navigation.navigate("TodoDetails", {
      id: item.id,
      title: item.title,
    })
  }
>
  <Text style={{ padding: 10, fontSize: 18 }}>
    {item.title}
  </Text>
</TouchableOpacity>
        )}
      />
    </View>
  );
}
