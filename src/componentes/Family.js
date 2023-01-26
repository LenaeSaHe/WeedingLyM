import photoFamF from "../img/papas.jpg";
import photoFamM from "../img/papas.jpg";
import Title from "./common/Title";
function Family() {
  return (
    <section className="contB">
      <div className="container">
        <div className="content row">
          <div className="col-lg-6 col-sm-12 center pb-5">
            <div className="row">
              <div className="col">
                <Title>Padres de la novia</Title>
              </div>
            </div>

            <div className="row">
              <div className="col center py-3">
                <img src={photoFamF} className="img-fluid photofam" />
              </div>
            </div>

            <div className="row">
              <div className="col center txtTitles fs-3">
                - Julio César Sánchez Rivera
                <br />- Maria Elena Hernández Hernández
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 center pb-5">
            <div className="row">
              <div className="col">
              <Title>Padres del novio</Title>
              </div>
            </div>

            <div className="row">
              <div className="col center py-3">
                <img src={photoFamF} className="img-fluid photofam" />
              </div>
            </div>

            <div className="row">
              <div className="col center txtTitles fs-3">
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
