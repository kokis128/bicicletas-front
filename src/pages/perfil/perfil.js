import {React} from 'react';
import "./perfil.css";
import NavBar from '../../components/navbar/navbar';


function Perfil(){


    return(
        <div className="main">

      <NavBar />

      <form onSubmit={console.log("Contraseña actualizada")}></form>
      <div className='div-form'>
        <label>Email</label>
        <div>email@gamail.com</div>


      </div>
      <div className='div-form'>

      <label>Email</label>

      <input className='input-form'/>


      </div>

        </div>
    );
}

export default Perfil; 