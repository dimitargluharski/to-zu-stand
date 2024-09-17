import { useStore } from "./store/todosStore";

function App() {
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);

  const LOREM_TEXT = 'LOREM IPSUM DOLOR SIT AMET!';

  const handleAddTodo = () => {
    addTodo(LOREM_TEXT);
  };

  return (
    <>
      {todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
}

export default App;
