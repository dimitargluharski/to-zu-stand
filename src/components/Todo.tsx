interface TodoProps {
  id: string;
  message: string;
  handleRemoveTodo: (id: string) => void;
}

export const Todo = ({ id, message, handleRemoveTodo }: TodoProps) => {

  return (
    <p onClick={() => handleRemoveTodo(id)}>
      {message}
    </p>
  )
};