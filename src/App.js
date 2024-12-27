// import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './TodoButton';
import './App.css'; 



function App() {
  return (
    <div className="App">

      <TodoCounter /> {/* Importamos un componente dentro de otro componente. */}
      <TodoSearch />
      <TodoList>
        <TodoItem /> 
        <TodoItem />
        <TodoItem />
      </TodoList>  

      <CreateTodoButton />
    </div>
  );
}

export default App;
