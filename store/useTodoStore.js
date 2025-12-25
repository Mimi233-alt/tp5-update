// store/useTodoStore.js
import { create } from "zustand";

export const useTodoStore = create((set) => ({
  // état global
  todos: [],

  // ajouter un todo
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),

  // supprimer un todo par id
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));
