import './TodoCounter.css';

function TodoCounter( { total, completed } ) {
    return (
      <h1 className="TodoCounter-completed">
        Has completado 
        <span> {completed} </span> de
         <span> {total} </span> TODOs.
      </h1>
    );
}

export { TodoCounter };