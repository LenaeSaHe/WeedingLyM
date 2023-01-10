import photoFamF from "../img/papas.jpg";
import photoFamM from "../img/papas.jpg";
function Family() {
  return (
    <section className="contB">
      <div className="container">
        <div className="content row">
          <div className="col-lg-6 col-sm-12 center pb-5">
            <div className="row">
              <div className="col">
                <p className="txtTitles2">Padres de la novia</p>
              </div>
            </div>

            <div className="row">
              <div className="col center py-3">
                <img src={photoFamF} className="img-fluid photofam" />
              </div>
            </div>

            <div className="row">
              <div className="col center txtTitles4 fs-3">
                - Julio César Sánchez Rivera
                <br />- Maria Elena Hernández Hernández
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 center txtTitles2 pb-5">
            <div className="row">
              <div className="col">
                <h2 className="txtTitles2">Padres del novio</h2>
              </div>
            </div>

            <div className="row">
              <div className="col center py-3">
                <img src={photoFamF} className="img-fluid photofam" />
              </div>
            </div>

            <div className="row">
              <div className="col center txtTitles4 fs-3">
                - Marcos Rivas Arzaluz
                <br />- Alejandra Rojas Brito
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Family;
