import React from 'react';
import './TodoSearch.css';

function TodoSearch({
    // Creamos un estado, un arrglo que no sólo se consume, sino que también se actualiza con una funcion acutalizadora.
    // Es decir, para un state llamado state, se crea una función llamada setState.
    
    // A continuación, agregamos un estado para guardar el valor del input.

    /* const [searchValue, setSearchValue] = React.useState(''); 

    console.log("Los usuarios buscan todos de: " + searchValue); */

    // El estado se debe comunicar con su componente padre, en este caso App.js. Pero no se puede hacer ya que sólo 
    // se puede comunicar con sus hijos. Por ello, lo cortamos y lo llevamos a App.js.

    // Ahora, vamos a recibir el estado y la función actualizadora como props.

    searchValue,
    setSearchValue,
}) {
    return (
        <input 
            placeholder="Cortar cebolla" 
            className="todo-search"
            value={searchValue}
            onChange={(event) => {
                //console.log('Cambio en el input search');
                //console.log(event.target.value);
                setSearchValue(event.target.value);
            }}
        />
    );  
}

export { TodoSearch };