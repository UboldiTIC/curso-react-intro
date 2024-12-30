import './TodoList.css';

function TodoList({ children }) {
    return (
      <div className="todo-list-container">
        <ul>
          {children}
        </ul>
      </div>
    );
}

export { TodoList };