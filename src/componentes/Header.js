import monograma from "../img/Imagen2.png";
import CarrouselHeader from "./CarrouselHeader";

function Header() {
  return (
    <section id="">
                    <CarrouselHeader/>

      <header className="parallax-header">
        <div className="container">
          <div className="header-content">
            {/*<img src={monograma} id="monograma" />*/}
          </div>
        </div>
      </header>
    </section>
  );
}
export default Header;
