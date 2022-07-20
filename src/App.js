
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { InicioSesion } from './components/Paginas/InicioSesion';
import { Navbar } from '../src/components/UI/Navbar';
import Inicio from './components/Paginas/Inicio';

import {Noticias} from '../src/components/Paginas/Noticias';


function App() {
  return (
    <div className="App">
      <InicioSesion/>


    </div>
  );
}

export default App;
