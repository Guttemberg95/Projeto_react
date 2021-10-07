import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import playlists from './DadosPlaylist';


function ListarPlaylists() {

    const RetornaLista = playlists.map((p) => {
        return (
            
                <h1><Link to={`/Playlists/${p.id} `}> <img src={p.capa} width="20%" height="30%"/></Link></h1>
        )
    })
    return (
        <div className="">
            {RetornaLista}
        </div>);




}

export default ListarPlaylists;

