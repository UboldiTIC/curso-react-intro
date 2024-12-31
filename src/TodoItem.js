import './TodoItem.css';

function TodoItem(props) {
    return (
      <li>
        <span className="TodoItem-icon-check">V</span>
        <p>{props.text}</p>
        <span className="TodoItem-icon-delete" >X</span>
      </li>
    );
  }

  export { TodoItem }; // Exportamos el componente TodoItem.