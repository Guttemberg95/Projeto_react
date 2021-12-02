import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './componentes/Home.js';
import './componentes/Cadastro.js';
import './componentes/Faq.js';
import './componentes/Login.js';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro';
import Faq from './componentes/Faq';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Editar from './componentes/Editar';
import ListarPlaylists from './componentes/ListarPlaylists';
import DetalhesPlaylist from './componentes/DetalhesPlaylist';
import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './componentes/Login.js';
import usuario from './componentes/Usuario';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/Playlists/:id" >
            <DetalhesPlaylist />
          </Route>
          <Route path="/Playlists" >
            <ListarPlaylists />
          </Route>
          <Route path="/Editar">
            <Cadastro />
          </Route>
          <Route path="/Cadastro">
            <Cadastro />
          </Route>
          <Route path="/Faq">
            <Faq />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;