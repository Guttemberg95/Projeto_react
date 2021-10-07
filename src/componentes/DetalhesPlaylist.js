import { useParams } from "react-router-dom"
import playlists from "./DadosPlaylist";

function DetalhesPlaylist () {
    const { id } = useParams();

    const playlist = playlists.find( (p) => playlists.id == id)
    const musicas = playlist.musicas.map ((m) => {
        return (
            <li>
                 <audio controls>
                    <source src={m.arquivo} type="audio/mpeg"/>
                </audio>

            </li>
        )

    })
    return (
        <div>
        <div>
            <img src={playlist.capa} width="30%" height="40%"/>
            <h1>{playlist.nome}</h1>
            <h2>{playlist.cantor}</h2>
        </div>
        <ul>
            {musicas}
        </ul>
    </div>
    
    )
}
export default DetalhesPlaylist;