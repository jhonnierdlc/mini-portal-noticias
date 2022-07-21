
import {useAuth0} from '@auth0/auth0-react'
import { LoginButton } from "./components/Paginas/InicioSesion";
import {Inicio} from "./components/Paginas/Inicio";
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {Noticias} from './components/Paginas/Noticias' 
import { LogoutButton } from "./components/Paginas/CerrarSesion";
import { Navbar } from './components/UI/Navbar';
import {Clima} from './components/Paginas/Clima';





function App() {

  const { isAuthenticated } = useAuth0();


  return (
    
    <div className="App">
    
      
      {isAuthenticated ? (
        <>
          <Navbar />
          <Noticias />
          <hr></hr>
          <Clima/>
        </>
      ) : (
        <LoginButton />
      )}
    
  </div>
  );
}

export default App;
