import {React} from 'react';
import "./navbar.css";

function NavBar(){


    return(
        <div className="navbar-size">
            <div className='navbar-left'>

            <h3 className='nav-h3'>bicicletas</h3>
            <h3 className='nav-h3'>Alquileres</h3>
            </div>
            <div className='navbar-center'></div>
            <div className='navbar-right'>
            <h3 className='nav-h3'>Perfil</h3>
            <h3 className='nav-h3'>Salir</h3>
            </div>
            
           

        </div>
    );
}

export default NavBar; 