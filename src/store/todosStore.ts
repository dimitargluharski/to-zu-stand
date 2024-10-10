import { create } from 'zustand';

interface Todo {
  id: string;
  message: string;
}

interface TodoState {
  todos: Todo[];
  addTodo: (id: string, message: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, message: string) => void;
}

export const useStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (id: string, message: string) => set((state) => ({ todos: [...state.todos, { id, message }] })),
  removeTodo: (id: string) => set((state) => ({ todos: state.todos.filter(t => t.id !== id) })),
  editTodo: (id: string, message: string) => set((state) => ({
    todos: state.todos.map((t) => t.id === id ? { ...t, message } : t)
  }))
}));
