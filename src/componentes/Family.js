
import photoFamF from "../img/papas.jpg"
import photoFamM from "../img/papas.jpg"
function Family()
{
  
    return <section className="contB">
    <div className="container">
      <div className="content row">
        <div className="col-8 boxfam text-center txtTitles back">
          Padres de la novia
          <hr />
          <blockquote className="nomPadres text-center">
            - Julio César Sánchez Rivera
          </blockquote>
          <blockquote className="nomPadres text-center">
            - Maria Elena Hernández Hernández
          </blockquote>
        </div>
        <div className="col-4 text-center back boxphoto">
          <img src={photoFamF} className="img-fluid photofam" />
        </div>
        <div className="col-4 text-center back boxphoto">
          <img src={photoFamM} className="img-fluid photofam" />
        </div>
        <div className="col-8 boxfam text-center txtTitles back">
          Padres del novio
          <hr />
          <blockquote className="nomPadres text-center">
            - Marcos Rivas
          </blockquote>
          <blockquote className="nomPadres text-center">
            - Alejandra Rojas Brito
          </blockquote>
        </div>
      </div>
    </div>
  </section>

}
export default Family;