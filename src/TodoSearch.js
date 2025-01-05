import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    // Creamos un estado, un arrglo que no sólo se consume, sino que también se actualiza con una funcion acutalizadora.
    // Es decir, para un state llamado state, se crea una función llamada setState.
    
    // A continuación, agregamos un estado para guardar el valor del input.
    const [searchValue, setSearchValue] = React.useState(''); 

    console.log("Los usuarios buscan todos de: " + searchValue);

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