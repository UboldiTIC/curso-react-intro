import logo from './platzi.webp';
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
      </ TodoList>  

    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
