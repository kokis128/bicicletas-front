import {React} from 'react';
import "./home.css";
import NavBar from '../../components/navbar/navbar';
import BicicletasDisponibles from '../../components/bicicletasDisponibeles/bicicletasDisponibeles';

function Home(){

  const ITEMS=[
{ title:"BICICLETA 1",descripcion:"modelo 2023" },
{ title:"BICICLETA 2",descripcion:"modelo 2023" },
{ title:"BICICLETA 3",descripcion:"modelo 2023" },
{ title:"BICICLETA 4",descripcion:"modelo 2023" },
{ title:"BICICLETA 5",descripcion:"modelo 2023" },
{ title:"BICICLETA 6",descripcion:"modelo 2023" },
{ title:"BICICLETA 7",descripcion:"modelo 2023" },
{ title:"BICICLETA 8",descripcion:"modelo 2023" },
{ title:"BICICLETA 9",descripcion:"modelo 2023" },
{ title:"BICICLETA 10",descripcion:"modelo 2023" },
];


 return(
        <div className="main">

      <NavBar />
      <h1 className='h1-home'>Bicicletas Disponibles</h1>
      <div className='bicicletas-disp-size'> 
      
      <div className='bicicletas-disp-container'> 
      {

        ITEMS.map((item,index)=>(
           <BicicletasDisponibles key={index} title={item.title} descripcion={item.descripcion} />

          
        ))


        
      }
     
      
         </div>
      
      
        </div>

        </div>
    );
}

export default Home; 