import {React} from 'react';
import "./register.css";
import NavBar from '../../components/navbar/navbar';


function Register(){


    return(
      <>
      <NavBar />
        <div>

          <div className="main">

          <form className='form-size' onSubmit={console.log("Contraseña actualizada")}>
      <div className='div-form'>
        <label>Email</label>
        <input className='input-form'  type="email" placeholder="ingrese su email"/>
      
      </div>

      <div className='div-form'>
      <label className='label-form'>Nombre</label>
   
      <input className='input-form'  type="text" placeholder="ingrese su nombre"/>
      </div>

      <div className='div-form'>
     
      <input className='input-form'  type="password" placeholder="contraseña"/>
     
      <input className='input-form'  type="password" placeholder="confirmar nueva contraseña"/>
      </div>

     
      <button className='button-form' type='submit'>
        Crear usuario
      </button>

      </form>






          </div>

      

     


      

        </div>

        </>
    );
}

export default Register;    