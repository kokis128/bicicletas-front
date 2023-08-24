import {React} from 'react';
import "./navbar.css";
import {Link} from 'react-router-dom';



function NavBar(){


    return(
        <div className="navbar-size">
            <div className='navbar-left'>

          <Link to="/#">  <h3 className='nav-h3'>bicicletas</h3></Link>
          <Link to="/#"> <h3 className='nav-h3'>Alquileres</h3></Link>
            </div>
            <div className='navbar-center'></div>
            <div className='navbar-right'>
            <Link to="/perfil"><h3 className='nav-h3'>Perfil</h3></Link>
            <Link to="/#"><h3 className='nav-h3'>Salir</h3></Link>
            </div>
            
           

        </div>
    );
}

export default NavBar; 