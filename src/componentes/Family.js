import photoFamM from "../img/papas.jpg";
import photoFamL from "../img/jym.jpeg";
import flowersCircle from "../img/circulo-flores.png";
import Title from "./common/Title";
import FamilyItem from "./FamilyItem";
function Family() {
  return (
    <section className="contB familyContainer">
      <div className="container">
        <div className="content row">
          <FamilyItem
            title="Padres de la novia"
            father="Julio César Sánchez Rivera"
            mother="Maria Elena Hernández Hernández"
          />
          <FamilyItem
            title="Padres del novio"
            father="Marcos Rivas Arzaluz"
            mother="Alejandra Rojas Brito"
          />
        </div>
      </div>
    </section>
  );
}
export default Family;
