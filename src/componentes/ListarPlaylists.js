import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import '../css/listarplay.css';


function ListarPlaylists() {
    const [playlists, setPlaylists] = useState([]);

    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

    useEffect(() => {

        if (usuario !== null) {
            axios.get(`http://localhost:3001/usuarios?email=${usuario.email}`)
                .then((res) => setPlaylists(res.data[0].playlists))

        } else {

            axios.get('http://localhost:3001/playlists')
                .then((res) => setPlaylists(res.data))

        }

    }, [])


    if (usuario != null) {
        if (usuario.playlists[0]) {
            const RetornaLista = playlists.map((p) => {
                return (
                    <>
                        <div className="card-playlist">
                            <Link to={`/Playlists/${p.id} `}>
                                <img src={p.capa} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title-playlist">{p.nome}</h5>
                                </div>
                            </Link>
                        </div>
                        <Link to="/Criar_Playlist" className="nav-link">
                            <button type="button" className="btn-inscrever-home">
                                Criar Playlist
                            </button>
                        </Link>
                    </>
                )
            })

            return (
                <div className="card-group">
                    {RetornaLista}
                </div>
            )


        }
        else {
            return (
                <>
                    <h5>Não existe playlists cadastradas.</h5>
                    <Link to="/Criar_Playlist" className="nav-link">
                        <button type="button" className="btn-inscrever-home">
                            Criar Playlist
                        </button>
                    </Link>
                </>
            )
        }
    } else {
        const RetornaLista = playlists.map((p) => {
            return (
                <div className="card-playlist">
                    <Link to={`/Playlists/${p.id} `}>
                        <img src={p.capa} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title-playlist">{p.nome}</h5>
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

}


export default ListarPlaylists;

