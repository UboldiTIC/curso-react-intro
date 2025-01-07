import React from "react";
import { TodoIcon } from "./TodoIcon"; // Importamos el componente TodoIcon.

function DeleteIcon({ onDelete }) {
  return (
      <TodoIcon
          type="delete"
          color="gray"
          onClick={onDelete}
      />
    );
}

export { DeleteIcon }; // Exportamos el componente DeleteIcon.