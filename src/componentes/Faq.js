import '../css/estiloFaq.css';

function Faq() {
    return (
        <div>
            <div id="Background">

                <div id="barra-pesquisar">
                    <h1> Como podemos ajudar?</h1>
                    <div className="input-container">

                        <input type="text" className="Input-buscar" aria-label="Buscar" placeholder="Buscar" autocomplete="off"
                            value="" />
                    </div>
                </div>

                <div className="container">
                    <table className="table borderless">
                        <tr>
                            <th>AJUDA COM A COBRANÇA </th>
                            <th>PLANOS DISPONÍVEIS</th>
                            <th>AJUDA COM A COBRANÇA </th>
                            <th>FAZENDO LOGIN</th>
                        </tr>
                        <tr>
                            <td><a href="#">Atualizações de preço</a></td>
                            <td><a href="#">Criar ou entrar em um plano Família</a></td>
                            <td><a href="#">Ajuda com pagamento não efetuado</a></td>
                            <td><a href="#">Não consigo redefinir a senha</a></td>
                        </tr>
                    </table>
                </div>

            </div>



            <div className="categorias-section">
                <div className="container">
                    <div className="categorias-section-container">

                        <div className="row">
                            <div className="col">
                                <div className="container-categorias">
                                    <h3 className="titulo-categorias">
                                        Ajuda com a conta
                                    </h3>
                                    <div className="lista-categorias">
                                        <ul>
                                            <li>
                                                <a href="#">Fazendo login</a>
                                            </li>
                                            <li>
                                                <a href="#">Ajuda com o perfil</a>
                                            </li>
                                            <li>
                                                <a href="#">Ajuda com as preferências da conta</a>
                                            </li>
                                            <li>
                                                <a href="#">Segurança</a>
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <div className="container-categorias">
                                    <h3 className="titulo-categorias">
                                        Ajuda com o pagamento
                                    </h3>
                                    <div className="lista-categorias">
                                        <ul>
                                            <li>
                                                <a href="#">Gerenciando pagamentos</a>
                                            </li>
                                            <li>
                                                <a href="#">Formas de pagamento</a>
                                            </li>
                                            <li>
                                                <a href="#">Ajuda com a cobrança</a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="container-categorias">
                                    <h3 className="titulo-categorias">

                                        Ajuda com o plano
                                    </h3>
                                    <div className="lista-categorias">
                                        <ul>
                                            <li>
                                                <a href="#">Planos disponíveis</a>
                                            </li>
                                            <li>
                                                <a href="#">Ajuda com as preferências do plano</a>
                                            </li>
                                            <li>
                                                <a href="#">Premium Família e Kids</a>
                                            </li>
                                            <li>
                                                <a href="#">Premium Universitário</a>
                                            </li>
                                            <li>
                                                <a href="#">Premium Duo</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>




                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="container-categorias">
                                    <h3 className="titulo-categorias">
                                        Ajuda com o app
                                    </h3>
                                    <div className="lista-categorias">
                                        <ul>
                                            <li>
                                                <a href="#">Como começar</a>
                                            </li>
                                            <li>
                                                <a href="#">Preferências do app</a>
                                            </li>
                                            <li>
                                                <a href="#">Solução de problemas</a>
                                            </li>
                                            <li>
                                                <a href="#">Playlists</a>
                                            </li>
                                            <li>
                                                <a href="#">Recursos</a>
                                            </li>
                                            <li>
                                                <a href="#">Recursos de redes sociais</a>
                                            </li>
                                            <li>
                                                <a href="#">Assistentes de voz</a>
                                            </li>

                                        </ul>
                                    </div>


                                </div>
                            </div>

                            <div className="col">
                                <div className="container-categorias">
                                    <h3 className="titulo-categorias">
                                        Ajuda com o dispositivo
                                    </h3>
                                    <div className="lista-categorias">
                                        <ul>
                                            <li>
                                                <a href="#">Alto-falantes</a>
                                            </li>
                                            <li>
                                                <a href="#">Smartwatches</a>
                                            </li>
                                            <li>
                                                <a href="#">TVs</a>
                                            </li>
                                            <li>
                                                <a href="#">Videogames</a>
                                            </li>
                                            <li>
                                                <a href="#">Carros</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="container-categorias">
                                    <h3 className="titulo-categorias">
                                        Ajuda com privacidade e dados
                                    </h3>
                                    <div className="lista-categorias">
                                        <ul>
                                            <li>
                                                <a href="#">Privacidade de reprodução</a>
                                            </li>
                                            <li>
                                                <a href="#">Informações de privacidade e dados</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="comunidade-section">
                <div className="container">
                    <div className="container-comunidade">
                        <h1>Visite a Comunidade</h1>
                        <p>Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs especialistas do mundo todo!</p>
                        <a href="#">
                            <div className="btn btn-success">Encontrar respostas</div>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default Faq;