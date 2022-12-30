import maps from "../img/maps.png"
function Location()
{
    return   <section className="contLoc">
    <div className="container">
      <div className="row content">
        <div className="col-12" id="garden">
          <div className="cardLoc center">
            <h3 className="cardLoc-title text-center">Finca San Pedro</h3>
            <p className="text-center">
              Bugambilias 2 Fracc, Brisas, 62584 Temixco, Mor. <br />
              00:00 hrs.
            </p>
            <p className="text-center">
              <img src={maps} width="100" height="100" className="center" />
            </p>
            <p className="text-center">
              <small>Da clic en el botón inferior para acceder al mapa</small>
            </p>
            <a className="text-center" href="#" id="btnlink">Clic</a>
          </div>
        </div>
      </div>
    </div>
  </section>


}
export default Location;