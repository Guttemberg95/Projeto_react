import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <h1 style={{ color: '#e5e5e5'}}>
                    Spotify
                </h1>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/Cadastro" className="nav-link">Cadastro</Link>
                            <Link to="/Faq" className="nav-link">Faq</Link>
                            <Link to="/Playlists" className="nav-link">Playlists</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;