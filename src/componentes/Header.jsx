import { useRef } from "react";
import { useEffect } from "react";
import monograma from "../img/Imagen2.png";
import cover from "../img/mainLyM.jpg";
import CarrouselHeader from "./CarrouselHeader";

function Header({ invitado }) {
  return (
    <header>
      <div className="background">
        <div className="content">
          <div className="fontSize45 text-shadow">¡Nos casamos!</div>
          <div className="fontSize90 font-bold text-shadow front">
            Lena & Marcos
          </div>
          <div className="fontSize30 text-shadow fadeIn back ">
            {invitado?.nickname},<br />
            te invitamos a formar parte de este momento
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
