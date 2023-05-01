import { useRef } from "react";
import { useEffect } from "react";
import monograma from "../img/Imagen2.png";
import cover from "../img/mainLyM.jpg";
import florCentral from "../img/flor-central.png";
import CarrouselHeader from "./CarrouselHeader";

function Header({ invitado }) {
  return (
    <>
      <header>
        <div className="background">
          <div className="fontSize45 text-shadow fadeIn">¡Nos casamos!</div>
          <div className="fontSize90 font-bold text-shadow fadeIn gradient">
            Lena & Marcos
          </div>
          <div className="fontSize30 text-shadow fadeIn">
            {invitado?.nickname}, {invitado?.nickname.split(" ").length>1 ? "los invitamos" : "te invitamos"} a formar parte de este momento
            tan importante para nosotros
          </div>
        </div>
      </header>
      <div className="headerSeparator">
        <img src={florCentral} width={200} alt="" />
      </div>
    </>
  );
}
export default Header;
