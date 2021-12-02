import { useState, useEffect } from "react";
import usuario from "./Usuario";
import '../css/cadastro.css';
import axios from "axios";

function Editar() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [user, setUser] = useState('');
    const [data, setData] = useState('');
    const [sexo, setSexo] = useState('Masculino');


    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

        axios.get(`http://localhost:3001/usuarios?id=${usuario.id}`)
            .then((res) => {
                const u = res.data
                setEmail(u.email);
                setSenha(u.senha);
                setUser(u.user);
                setData(u.data);
                setSexo(u.sexo);
            })

    }, [])

    async function handleSubmit(e) {
        e.preventDefault();

            let dados = { email, senha, user, data, sexo }

            axios.put(`http://localhost:3001/usuarios?id=${usuario.id}`, dados)
                .then(res => console.log(res.data))
    
    }

return (
    <>

        <div>
            <img src="../img/spotify-logotipo.png" alt="" className="logo" />

            <form onSubmit={(e) => handleSubmit(e)}>

                <label for="email">Digite seu email</label>
                <input type="email" id="email" className="input-padrao" required value={email} onChange={(e) => setEmail(e.target.value)} />

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

                <input type="submit" value="Editar" className="btn-inscrever" />
            </form>
        </div>
    </>
)
}

export default Editar;