// Creamos nuestra propia librería de iconos
// Vinculada a DeleteIcon.js y CompleteIcon.js: delete.svg y complete.svg

import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

//Creamos este objeto para poder hacer el doble condicional en el componente TodoIcon.
const iconsTypes = {
    
    "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
            {iconsTypes[type](color)}      
        </span>
    )
}

export { TodoIcon };