
import photoFamF from "../img/papas.jpg"
import photoFamM from "../img/papas.jpg"
function Family()
{
  
    return <section className="contB">
    <div className="container">
      
      <div className="content row">
        <div className="col-6 center txtTitles2">Padres de la novia</div>
        <div className="col-6 center txtTitles2">Padres del novio</div>

        <div className="col-6 center py-3"><img src={photoFamF} className="img-fluid photofam" /></div>
        <div className="col-6 center py-3"><img src={photoFamF} className="img-fluid photofam" /></div>

        <div className="col-6 center txtTitles2">
          - Julio César Sánchez Rivera<br/>- Maria Elena Hernández Hernández
        </div>
        <div className="col-6 center txtTitles2">
          - Marcos Rivas Arzaluz<br/>- Alejandra Rojas Brito
        </div>
        
      </div>


      </div>
  </section>

}
export default Family;