import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import playlists from './DadosPlaylist';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/Playlists" >
            <ListarPlaylists />
          </Route>
          <Route path="/Playlists/:id" >
            <DetalhesPlaylist />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;