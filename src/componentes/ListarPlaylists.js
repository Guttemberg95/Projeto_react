import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import '../css/listarplay.css';

function ListarPlaylists() {
    const [playlists, setPlaylists] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/playlists')
        .then ( (RetornaLista) => setPlaylists(RetornaLista.data) )
    }, [])

    const RetornaLista = playlists.map((p) => {
        return (
            <div className="card">
            <Link to={`/Playlists/${p.id} `}>   
                <img src={p.capa} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{p.nome}</h5>
                </div>
            </Link>
            </div>
        )
    })

    return (
        <div className="card-group">
            {RetornaLista}
        </div>
    )
}

export default ListarPlaylists;

