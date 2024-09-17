import { create } from 'zustand';

interface TodoState {
  todos: string[];
  addTodo: (todo: string) => void;
}

export const useStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo: string) => set((state) => ({ todos: [...state.todos, todo] })),
}));
