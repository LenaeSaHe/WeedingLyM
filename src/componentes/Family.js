
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
            stylePhoto="photoPapasLena"
          />
          <FamilyItem
            title="Padres del novio"
            father="Marcos Rivas Arzaluz"
            mother="Alejandra Rojas Brito"
            stylePhoto="photoPapasMarcos"
          />
        </div>
      </div>
    </section>
  );
}
export default Family;
