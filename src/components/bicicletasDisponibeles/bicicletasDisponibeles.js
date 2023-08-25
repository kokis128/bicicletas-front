import {React} from 'react';
import "./bicicletasDisponibeles.css";


function BicicletasDisponibles(props){


    return(


        <div className='bic-disp-container'> 
        <h4>{props.title}</h4>
        <h4>{props.descripcion}</h4>
        <button className='bici-disp-button'>Alquilar</button>

        </div>
    );
}

export default BicicletasDisponibles; 