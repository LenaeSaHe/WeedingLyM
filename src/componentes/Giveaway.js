import liverpool from "../img/liver.png";
import amazon from "../img/amazon.png";
function Giveaway() 
{
    return     <section className="contA">
    <div className="container">
      <div className="row content">

        <div className="col-12 back" id="divtable">
          <h1 className="text-center txtTitles">Mesa de regalos</h1>
          <p className="text-center txtText">
            ¡ Valoramos mucho tu asistencia !<br />
            Si deseas tener algún detalle con nosotros, te dejamos algunas
            sugerencias
          </p>
        </div>

        <div className="col-12 backable back">
          <div className="card center boxStore anyborder">
            <div className="card-body anyborder backR">
              <h5 className="card-title text-center txtTitles">Liverpool</h5>
              <p className="card-text text-center anyborder">
                <img src={liverpool} className="card-img-top brand" />
              </p>
              <p className="text-center">
                <a href="#" className="btn btn-primary text-center"
                  >Ver mesa de regalos</a>
              </p>
            </div>
          </div>
        </div>

        <div className="card center boxStore anyborder">
            <div className="card-body anyborder backR">
              <h5 className="card-title text-center txtTitles">Amazon</h5>
              <p className="card-text text-center anyborder">
                <img src={amazon} className="card-img-top brand"/>
              </p>
              <p className="text-center">
                <a href="#" className="btn btn-primary text-center"
                  >Ver mesa de regalos</a>
              </p>
            </div>
          </div>

      </div>
    </div>
  </section>


}
export default Giveaway;