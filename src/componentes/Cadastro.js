import { useState } from "react";
import usuario from "./Usuario";
import '../css/cadastro.css';
import axios from "axios";

function Cadastro() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState({email: ''});
    const [confirmacaoEmail, setConfirmacaoEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [user, setUser] = useState('');
    const [data, setData] = useState('');
    const [sexo, setSexo] = useState('Masculino');

    async function handleSubmit(e) {
        e.preventDefault();

        if (email !== confirmacaoEmail) {
            
            let dados = { email, senha, user, data, sexo}
            
            axios.post("http://localhost:3001/usuarios", dados)
                .then(res => console.log(res.data))

            setEmail('');
            setConfirmacaoEmail('');
            setSenha('');
            setUser('');
            setData('');
            setSexo('Masculino');
            setError({email: ''})
        }
    }

    return (
        <>
            {error.email && (<div className='alert alert-danger' role="alert">
                {error.email}
            </div>)}

        <div>
            <img src="../img/spotify-logotipo.png" alt="" className="logo" />

            <h2>Inscreva-se grátis e comece a <br />curtir.</h2>

            <form onSubmit={ (e) => handleSubmit(e)}>
                <div>
                    <a href="https://www.facebook.com/" className="btn-facebook">Inscrever-se com o Facebook</a>

                    <p>
                        _______________________ ou _______________________
                    </p>
                </div>

                <label for="email">Digite seu email</label>
                <input type="email" id="email" className="input-padrao" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label for="email">Confirme seu email</label>
                <input type="email" id="emailConfirmacao" className="input-padrao" required value={confirmacaoEmail} onChange={(e) => setConfirmacaoEmail(e.target.value)} />

                <label for="senha">Crie uma senha</label>
                <input type="password" id="senha" className="input-padrao" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                
                <label for="nome">Como devemos chamar você?</label>
                <input type="text" id="nome" className="input-padrao" required value={user} onChange={(e) => setUser(e.target.value)} />

                <label for="nascimento">Qual sua data de nascimento?</label>
                <input type="date" id="nascimento" className="input-padrao" required value={data} onChange={(e) => setData(e.target.value)} />

                <div>
                    <p>Qual é o seu gênero?</p>                    

                    <label for="radio-masculino"><input type="radio" name="sexo" value="Masculino"
                        id="radio-masculino" checked={sexo === 'Masculino'} onClick={(e) => setSexo('Masculino')} />Masculino</label>

                    <label for="radio-feminino"><input type="radio" name="sexo" value="Feminino"
                        id="radio-feminino" checked={sexo === 'Feminino'} onClick={(e) => setSexo('Feminino')} />Feminino</label>

                    <label for="radio-nao-binario"><input type="radio" name="sexo" value="Nao binario"
                        id="radio-nao-binario" checked={sexo === 'Nao binario'} onClick={(e) => setSexo('Nao binario')} />Não binário</label>

                </div>

                <label className="checkbox"><input type="checkbox" />Não quero receber mensagens de marketing do Spotify</label>
                <label className="checkbox"><input type="checkbox" />Compartilhar meus dados cadastrais com os provedores<br /> de
                    conteúdo
                    do Spotify para fins de marketing.</label>
                <label className="checkbox"><input type="checkbox" required/>Eu concordo com os <a
                    href="https://www.spotify.com/br/legal/end-user-agreement/" className="termos">Termos e Condições de Uso do
                    Spotify.</a></label>

                <p>
                    Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege <br />seus dados pessoais, leia a
                    <a href="https://www.spotify.com/br/legal/privacy-policy/" className="politica"> Política de Privacidade do
                        Spotify.</a> </p>

                <input type="submit" value="Inscrever-se" className="btn-inscrever" />
            </form>

            <h3>Já tem uma conta? <a
                href="https://accounts.spotify.com/pt-BR/login?continue=https:%2F%2Fwww.spotify.com%2Faccount%2Foverview%2F&_ga=2.267274440.790420978.1629205849-1991266309.1629205849"
                className="login">Faça login.</a></h3>
        </div>
        </>
    )
};

export default Cadastro;