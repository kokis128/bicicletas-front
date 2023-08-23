
import './App.css';
import {React} from 'react';
import {BrouserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home/home'
import Login from './pages/login/login';
import Register from './pages/registro/register';
import NotFound from './pages/notFound/notFound';

function AppWrapper(){
  return(
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/404" element={<notFound/>} />
      <Route path="*" element={NotFound} />

    </Routes>
  )
}






function App() {
  return (
    <div className="App">
     <Home />
    </div>
  );
}

export default App;
