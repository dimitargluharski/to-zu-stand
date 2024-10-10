import { useState } from "react";
import { Todo } from "./components/Todo";
import { useStore } from "./store/todosStore";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoString, setTodoString] = useState<string>('');

  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const removeTodo = useStore((state) => state.removeTodo);

  const handleAddNewTodo = () => {
    if (todoString === '') return;

    addTodo(uuidv4(), todoString); // change hardcoded 1
    setTodoString('');
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoString(event.target.value);
  }

  const handleRemoveTodo = (id: string) => {
    removeTodo(id);
  }

  return (
    <>
      <h1>Zustand Todo App</h1>

      <input type="text" value={todoString} onChange={handleOnChange} />

      <button onClick={handleAddNewTodo} title="Add new todo">
        +
      </button>

      <div>
        {todos.length > 0 ? todos.slice().reverse().map((todo) => <Todo id={todo.id} handleRemoveTodo={handleRemoveTodo} key={todo.id} message={todo.message} />) : <p>There are no todos, but you can add one!</p>}
      </div>

    </>
  );
}

export default App;
