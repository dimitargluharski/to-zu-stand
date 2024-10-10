import { useStore } from "./store/todosStore";

function App() {
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);

  return (
    <h1>Zustand Todo App</h1>
  );
}

export default App;
