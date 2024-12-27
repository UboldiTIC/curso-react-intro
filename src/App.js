import React from 'react';
// import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css'; 

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} /> {/* Importamos un componente dentro de otro componente. */}
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => ( 
          < TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>  

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
