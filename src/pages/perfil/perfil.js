import {React} from 'react';
import "./perfil.css";
import NavBar from '../../components/navbar/navbar';


function Perfil(){


    return(
      <>
      <NavBar />
        <div>

          <div className="main">

          <form className='form-size' onSubmit={console.log("Contraseña actualizada")}>
      <div className='div-form'>
        <label>Email</label>
        <h3 className='h3-form'>email@gamail.com</h3>
      </div>



      <div className='div-form'>
      <label className='label-form'>Nombre</label>
      <h3 className='h3-form'>Juan Perez</h3>
      </div>

      <div className='div-form'>
     
      <input className='input-form'  type="password" placeholder="ingrese contraseña acual"/>
      </div>

      <div className='div-form'>
     
      <input className='input-form'  type="password" placeholder="ingrese nueva contraseña"/>
      </div>
      
      <div className='div-form'>
      
      <input className='input-form'  type="password" placeholder="confirmar nueva contraseña"/>
      </div>

     
      <button className='button-form' type='submit'>
        Guardar
      </button>

      </form>






          </div>

      

     


      

        </div>

        </>
    );
}

export default Perfil; 