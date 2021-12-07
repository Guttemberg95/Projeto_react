import { useState } from "react";
import '../css/cadastro.css';
import axios from "axios";

function Criar_Playlist() {
    const [nome, setNome] = useState('');
    const [capa, setCapa] = useState('');

    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

    console.log(usuario.playlists)

    async function handleSubmit(e) {
        e.preventDefault();  

            let dados = { nome, capa, musicas:[]}

            console.log(dados)
            
            axios.post(`http://localhost:3001/usuarios/${usuario.id}/playlists`, dados)
                .then(res => console.log(res.data))

            setNome('');
            setCapa('');
        }
    

    return (
        <>
        <div>
            <img src="../img/spotify-logotipo.png" alt="" className="logo" />

            <h2>Crie sua nova playlist!</h2>

            <form onSubmit={ (e) => handleSubmit(e)}>

                <label for="play">Digite o nome da playlist:</label>
                <input type="text" id="email" className="input-padrao" required value={nome} onChange={(e) => setNome(e.target.value)} />

                <label for="play">Capa</label>
                <input type="text" id="emailConfirmacao" className="input-padrao" required value={capa} onChange={(e) => setCapa(e.target.value)} />

                <input type="submit" value="Cadastrar" className="btn-inscrever" />
            </form>
        </div>
        </>
    )
};

export default Criar_Playlist;