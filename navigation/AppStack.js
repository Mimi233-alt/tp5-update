import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoListScreen from "../screens/TodoListScreen";
import ToDoListDetails from "../screens/ToDoListDetails";

const Stack = createNativeStackNavigator();
export default function AppStack() { 
    return (
        <Stack.Navigator>
            <Stack.Screen name="Liste" component={TodoListScreen} />
            <Stack.Screen name="Détails" component={ToDoListDetails} />
        </Stack.Navigator>
        );
     }