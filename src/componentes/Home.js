import {Link} from "react-router-dom";
import img1 from '../img/02120615534339.jpg';
import img2 from '../img/Qual-é-o-melhor-streaming-para-ouvir-música_.jpg';

function Home() {
    return (
    <div>
    <div className="header">

        <h2 className="texto" style={{paddingTop: '10px'}}>
            Aproveite 1 mês grátis de Premium
        </h2>

        <h4 className="texto" style={{paddingTop: '10px'}}>
            Depois, pague somente R$ 19,90/mês. Cancele quando quiser.
        </h4>
        <Link to="/Cadastro" className="nav-link">
            <button type="button" className="btn btn-dark" style={{marginLeft: '60px'}}>
                Começar
            </button>
        </Link>
        <footer className="footer">
            <a href="https://www.spotify.com/legal/premium-promotional-offer-terms/" style={{color: '#e5e5e5'}}>
                Sujeito a Termos e Condições.
            </a>
            O mês grátis não está disponível para usuários que já experimentaram o Premium.
        </footer>

    </div>

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="img1" height="400px" width="100%"/>
            </div>
            <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="img2" height="400px" width="100%"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <div>
        <h2 style={{textAlign: 'center'}}>
            Escolha seu plano
        </h2>
        <div className="row">
            <div className="col-sm-4">
                <div className="card">
                    <div className="card body">
                        <h4 className="card-title">Individual</h4>
                        <p className="card-text">R$ 19,90/mês após o período da oferta <br/>
                            1 conta </p>

                        <div>
                            <p>Curta música sem anúncios <br/>

                                Ouça em qualquer lugar — até no modo offline <br/>

                                Escolha a música que quer ouvir <br/>

                                Faça um plano pré-pago ou uma assinatura </p>
                        </div>

                        <Link to="/Cadastro" className="nav-link">
                            <button type="button" className="btn-inscrever">
                                Começar
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card body">
                        <h4 className="card-title">Duo</h4>
                        <p className="card-text">R$ 24,90/mês após o período da oferta <br/>
                            2 contas </p>

                        <div>
                            <p>2 contas Premium para um casal que mora junto <br/>

                                Duo Mix: uma playlist só pra vocês, atualizada regularmente com músicas que os dois
                                gostam <br/>

                                Ouça sem anúncios, no modo offline e sob demanda <br/>

                                Faça um plano pré-pago ou uma assinatura </p>
                        </div>
                        <Link to="/Cadastro" className="nav-link">
                            <button type="button" className="btn-inscrever">
                                Começar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card body">
                        <h4 className="card-title">Família</h4>
                        <p className="card-text">R$ 34,90/mês após o período da oferta <br/>
                            Até 6 contas </p>

                        <div>
                            <p>6 contas Premium para familiares que moram no mesmo endereço <br/>

                                Family Mix: uma playlist pra família, atualizada regularmente com músicas que todo mundo
                                gosta <br/>

                                Bloqueie músicas com conteúdo explícito <br/>

                                Ouça sem anúncios, no modo offline e sob demanda <br/>

                                Spotify Kids: um aplicativo separado, feito especialmente para crianças <br/>

                                Faça um plano pré-pago ou uma assinatura </p>
                        </div>

                        <Link to="/Cadastro" className="nav-link">
                            <button type="button" className="btn-inscrever">
                                Começar
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
};

export default Home;