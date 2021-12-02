import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router";
import '../css/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState({ dadosInvalidos: '' });
    
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        axios.get(`http://localhost:3001/usuarios?email=${email}`)
            .then((res) => {
                if (res.data[0] != undefined) {
                    const usuario = res.data[0];

                    if (usuario.senha !== senha) {
                        setError({ dadosInvalidos: 'Dados Inválidos' });
                        return
                    }

                    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

                    ///Implementação incompleta
                    //props.setLogin(true)

                    history.push('/')
                }
            })
    }

    return (
        <>
            {error.dadosInvalidos && (<div className='alert alert-danger' role="alert">
                {error.dadosInvalidos}
            </div>)}

            <div>
                <form className='cad' onSubmit={(e) => handleSubmit(e)}>
                    <label className='label' for="email">Endereço de e-mail</label>
                    <input type="email" id="email" className="input-padrao" required value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label className='label' for="senha">Senha</label>
                    <input type="password" id="senha" className="input-padrao" required value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <div>
                        <a href="" className="lostsenha">Esqueceu sua senha?</a>
                    </div>

                    <input type="submit" value="Entrar" className="btn-inscrever" />
                </form>
            </div>
        </>
    )
};

export default Login;