import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import playlists from './DadosPlaylist';


function ListarPlaylists() {

    const RetornaLista = playlists.map((p) => {
        return (
            <div className="card" style={{ width: '300px', height: '300px'}}>
            <Link to={`/Playlists/${p.id} `}>   
                <img src={p.capa} className="card-img-top" style={{ width: '250px', height: '250px'}} />
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

