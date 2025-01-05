import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
      <button 
        className='create-todo-button'  
        onClick={                        // Agregamos un evento onClick al botón - Interacción siempre con on.
          (event) => {
            console.log('le diste click')
            console.log(event)
            console.log(event.target)
          }
        }
      >+</button>
    );
  }

  export { CreateTodoButton }; // Exportamos el componente TodoItem.