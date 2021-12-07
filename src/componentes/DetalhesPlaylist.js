import { useParams } from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from "react";

function DetalhesPlaylist () {
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

    const { id } = useParams();

    const playlist = usuario.playlists.find( (p) => p.id == id)
    const musicas = playlist.musicas.map ((m) => {
        return (
            <li class="list-group-item">
                <div>
                    <h4>{m.nome}</h4>
                    <h7>{m.cantor}</h7>
                </div>
                <audio controls>
                    <source src={m.arquivo} type="audio/mpeg"/>
                </audio>
            </li>
        )

    })
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h4>{playlist.nome}</h4>
                    <img src={playlist.capa} className='card-img-top' style={{ width: '350px', height: '350px'}}/>                   
                </div>
                <div className='col'>
                <ul className='list-group'>
                    {musicas}
                </ul>
                </div>
            </div>
        </div>
    
    )
}
export default DetalhesPlaylist;