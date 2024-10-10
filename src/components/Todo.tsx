import { useState } from "react";

interface TodoProps {
  id: string;
  message: string;
  handleRemoveTodo: (id: string) => void;
  handleUpdateTodo: (id: string, message: string) => void;
}

export const Todo = ({ id, message, handleRemoveTodo, handleUpdateTodo }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editMessage, setEditMessage] = useState(message);

  const handleSaveEdit = () => {
    if (editMessage.trim()) {
      handleUpdateTodo(id, editMessage);
      setIsEditing(false);
    }
  };

  return (
    <div style={{ padding: '5px' }}>
      <div>
        {isEditing ? (
          <input
            type="text"
            value={editMessage}
            onChange={(e) => setEditMessage(e.target.value)}
          />
        ) : (
          <span>{message}</span>
        )}
      </div>

      <div
        onClick={() => handleRemoveTodo(id)}
        style={{ backgroundColor: 'red', color: 'white', marginLeft: '5px', cursor: 'pointer' }}
      >
        remove
      </div>

      {isEditing ? (
        <button onClick={handleSaveEdit}>Save</button>
      ) : (
        <div onClick={() => setIsEditing(!isEditing)} style={{ cursor: 'pointer' }}>
          edit
        </div>
      )}
    </div>
  );
};
