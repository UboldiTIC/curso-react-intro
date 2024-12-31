import './TodoCounter.css';

function TodoCounter( { total, completed } ) {
    return (
      <h1>
        Has completado 
        <span className="TodoCounter-completed"> {completed} </span> de
         <span className="TodoCounter-completed"> {total} </span> TODOs.
      </h1>
    );
}

export { TodoCounter };