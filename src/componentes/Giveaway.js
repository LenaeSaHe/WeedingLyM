import liverpool from "../img/liver.png";
import amazon from "../img/amazon.png";
function Giveaway() {
  return (
    <section className="contA" id="idSecGive">
      <div className="container">
          <div className="row">

            <div className="col-lg-6 col-sm-12 tableMessage">
              <h3 className="txtTitles">Mesa de regalos</h3>
              <p className="text-center txtParagraph">
                ¡ Valoramos mucho tu asistencia !<br />
                Si deseas tener algún detalle con nosotros, te dejamos algunas sugerencias
              </p>
              <br/>
              <p className="txtTitles">¡ Gracias !</p>
            </div>

            <div className="col-lg-6 col-sm-12">
            <div className="row">
            <div className="col-12 backable">
              <div className="center boxStore anyborder">
                <div className="anyborder">
                    <h5 className="text-center txtTitles">Liverpool</h5>
                    <p className="text-center anyborder">
                      <a href="#" className="text-center">
                        <img src={liverpool} className="card-img-top brand"/>
                      </a>
                    </p>
                    <p className="text-center"><a href="#" className="btn btn-primary text-center">Ver mesa de regalos</a></p>
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
                    <a href="#" className="text-center">
                      <img src={amazon} className="card-img-top brand" />
                    </a>
                  </p>
                      <p className="text-center">
                        <a href="#" className="btn btn-primary text-center">Ver mesa de regalos</a>
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
