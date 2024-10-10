import { useState } from "react";
import { Todo } from "./components/Todo";
import { useStore } from "./store/todosStore";

function App() {
  const [todoString, setTodoString] = useState<string>('');

  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);

  const handleAddNewTodo = () => {
    if (todoString === '') return;

    addTodo('1', todoString); // change hardcoded 1
    setTodoString('');
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoString(event.target.value);
  }

  return (
    <>
      <h1>Zustand Todo App</h1>

      <input type="text" value={todoString} onChange={handleOnChange} />

      <button onClick={handleAddNewTodo} title="Add new todo">
        +
      </button>

      <div>
        {todos.length > 0 ? todos.slice().reverse().map((todo, index) => <Todo key={index} {...todo} />) : <p>There are no todos, but you can add one!</p>}
      </div>

    </>
  );
}

export default App;
