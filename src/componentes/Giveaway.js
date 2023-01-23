import liverpool from "../img/liver.png";
import amazon from "../img/amazon.png";
import Title from "./common/Title";
import Paragraph from "./common/Paragraph";
function Giveaway() {
  return (
    <section className="contA" id="idSecGive">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 tableMessage">
            <Title>Mesa de regalos</Title>
            <Paragraph>
              ¡ Valoramos mucho tu asistencia !<br />
              Si deseas tener algún detalle con nosotros, te dejamos algunas
              sugerencias
            </Paragraph>
            <br />
            <p className="txtTitles">¡ Gracias !</p>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="row">
              <div className="col-12 backable">
                <div className="center boxStore anyborder">
                  <div className="anyborder">
                    <h5 className="text-center txtTitles">Liverpool</h5>
                    <p className="text-center anyborder">
                      <a
                        href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51117720"
                        className="text-center"
                        target="_blank"
                      >
                        <img src={liverpool} className="card-img-top brand" />
                      </a>
                    </p>
                    <p className="text-center">
                      <a
                        href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51117720"
                        className="btn btn-primary text-center"
                        target="_blank"
                      >
                        Ver mesa de regalos
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 backable back">
                <div className="center boxStore anyborder">
                  <div className="anyborder backR">
                    <h5 className="text-center txtTitles">Amazon</h5>
                    <p className="text-center anyborder">
                      <a
                        href="https://www.amazon.com.mx/wedding/marcos-rivas-rojas-lena-elizabeth-sanchez-hernandez-morelos-november-2023/registry/34EZFKVSULGV7"
                        className="text-center"
                        target="_blank"
                      >
                        <img src={amazon} className="card-img-top brand" />
                      </a>
                    </p>
                    <p className="text-center">
                      <a
                        href="https://www.amazon.com.mx/wedding/marcos-rivas-rojas-lena-elizabeth-sanchez-hernandez-morelos-november-2023/registry/34EZFKVSULGV7"
                        className="btn btn-primary text-center"
                        target="_blank"
                      >
                        Ver mesa de regalos
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Giveaway;
