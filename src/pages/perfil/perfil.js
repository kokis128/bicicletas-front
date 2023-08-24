import {React} from 'react';
import "./perfil.css";
import NavBar from '../../components/navbar/navbar';


function Perfil(){


    return(
        <div className="main">

     

      <form onSubmit={console.log("Contraseña actualizada")}>

      
      <div className='div-form'>
        <label>Email</label>
        <div>email@gamail.com</div>
        </div>


      <div className='div-form'>
      <label>Nombre</label>
      <div>Juan Perez</div>
      </div>

      <div className='div-form'>
      <label>Nombre</label>
      <input type='password' placeholder='Ingrese contraseña Actual' /> 
      </div>

      <div className='div-form'>
      <label>Nombre</label>
      <input type='password' placeholder='Ingrese mueva contraseña' /> 
      </div>

      <div className='div-form'>
      <label>Nombre</label>
      <input type='password' placeholder='Confirmar mueva contraseña' /> 

      </div>

      <button className='button-form' type='submit'>

        guabdar 
        
      </button>

      <div className='div-form'>
      <label>Nombre</label>
      <div>Juan Perez</div>
      </div>
      
      </form>

        </div>
    );
}

export default Perfil; 