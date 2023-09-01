
import './App.css';
import {React} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home/home'
import Login from './pages/login/login';
import Register from './pages/registro/register';
import NotFound from './pages/notFound/notFound';
import Perfil from './pages/perfil/perfil';
import NavBar from './components/navbar/navbar';
import "bootstrap/dist/css/bootstrap.min.css";

function AppWrapper(){
  return(
    <>
    <NavBar />
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/404" element={<notFound/>} />
      <Route path="#" element={<NotFound />} />

    </Routes>
    </>
  )
}






function App() {



  return (
    <>
    
    <Router>
    <AppWrapper />
    </Router>
    

    <div className="App">
     
    </div>
    </>
  );
}

export default App;
