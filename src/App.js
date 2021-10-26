import logo from './img/spotify-logotipo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './componentes/Home.js';
import './componentes/Cadastro.js';
import './componentes/Faq.js';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro';
import Faq from './componentes/Faq';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import React from "react";
import './css/cadastro.css';
import './css/estiloFaq.css';
import './css/home.css';
import ListarPlaylists from './componentes/ListarPlaylists';
import DetalhesPlaylist from './componentes/DetalhesPlaylist'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/Playlists/:id" >
            <DetalhesPlaylist />
          </Route>
          <Route path="/Playlists" >
            <ListarPlaylists />
          </Route>
          <Route path="/Cadastro">
            <Cadastro />
          </Route>
          <Route path="/Faq">
            <Faq />
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