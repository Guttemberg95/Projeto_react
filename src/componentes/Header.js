import { Link } from "react-router-dom";
import '../css/header.css';
import spot_branco from "../img/spot-branco.png"

function Header() {
    return (
        <div>            
            <ul> 
                <img src={spot_branco} width="40" height="auto" style={{paddingBottom:"17px"}}/>
                <h1 className='title'>Spotify</h1>
                <li><Link to="/Faq">FAQ</Link></li>  
                <li><Link to="/Playlists">Playlists</Link></li>  
                <li><Link to="/Cadastro">Cadastro</Link></li>      
                <li><Link to="/">Home</Link></li>  
            </ul>
        </div>
    )
};

export default Header;