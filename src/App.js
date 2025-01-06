import React from 'react';
// import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Abrir el grifo', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  // Agregamos el estado
  const [searchValue, setSearchValue] = React.useState(''); 
  
  const completedTodos = todos.filter(todo => !!todo.completed).length; // !! la doble negación convierte a booleano.
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => { 
    const textTodo = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return textTodo.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  console.log("Los usuarios buscan todos de: " + searchValue);

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} /> {/* Importamos un componente dentro de otro componente. */}
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => ( 
          < TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>  

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
