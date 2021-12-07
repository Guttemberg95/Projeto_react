import { Link } from "react-router-dom";
import '../css/header.css';
import spot_branco from "../img/spot-branco.png"
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { on } from "events";


function Header() {

    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuario == null) {
        return (
            <div>
                <ul>
                    <img src={spot_branco} width="40" height="auto" style={{ paddingBottom: "17px" }} />
                    <h1 className='title'>Spotify</h1>
                    <li><Link to="/Login">Login</Link></li>
                    <li><p>|</p></li>
                    <li><Link to="/Faq">FAQ</Link></li>
                    <li><Link to="/Playlists">Playlists</Link></li>
                    <li><Link to="/Cadastro">Cadastro</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <ul>
                    <img src={spot_branco} width="40" height="auto" style={{ paddingBottom: "17px" }} />
                    <h1 className='title'>Spotify</h1>
                    <li><Link to="/Editar">Editar</Link></li>
                    <li><button onClick={(e) => handleSubmit(e)}>Logout</button></li>
                    <li><p>|</p></li>
                    <li><Link to="/Faq">FAQ</Link></li>
                    <li><Link to="/Playlists">Playlists</Link></li>
                    <li><Link to="/Cadastro">Cadastro</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        )
    }
}



function handleSubmit(e) {
    e.preventDefault();

    localStorage.clear();
}

export default Header;