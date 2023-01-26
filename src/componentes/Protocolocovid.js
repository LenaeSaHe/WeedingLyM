import Title from "./common/Title";
import mask from "../img/mask.ico";
import icocara from "../img/icocara.jpg";
import doctor from "../img/doctor.ico";
import distancia from "../img/distancia.jpg";
function Protocolocovid()
{
    return <section className="smalldiv">
                <Title>Protocolo de seguridad e higiene durante el evento</Title>
                    <div className="d-flex flex-column justify-content-center align-items-center container">
                        <div className="row mt-5">
                            <div className="col-3 text-center smallletter"><img src={doctor} width="48"/><br/>Por favor, respeta las medidas de sanidad.</div>
                            <div className="col-3 text-center smallletter"><img src={mask} width="48"/><br/>Continua con el uso de cubrebocas y gel antibacteríal.</div>
                            <div className="col-3 text-center smallletter"><img src={icocara} width="48"/><br/>Evita el contacto de tus manos con nariz y boca.</div>
                            <div className="col-3 text-center smallletter"><img src={distancia} width="70"/><br/>Mantén la sana distancia.</div>
                        </div>
                        <div className="row mt-3">
                            <p className="fontcovid"><b>Si presentas algún síntoma previo al evento, háznoslo saber, comprenderemos tu ausencia.</b></p>
                        </div>
                    </div>                
            </section>
}
export default Protocolocovid;