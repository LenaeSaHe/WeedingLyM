import { useRef } from "react";
import { useEffect } from "react";
import monograma from "../img/Imagen2.png";
import CarrouselHeader from "./CarrouselHeader";

function Header({ invitado }) {
  const ref = useRef(null);
  const refHeader = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const offset = window.scrollY;
      if (ref.current) {
        ref.current.style.top = -offset / 5 + "px";
      }

      if (refHeader.current) {
        if (
          offset >= refHeader.current.offsetTop &&
          offset <= refHeader.current.offsetHeight - 200
        ) {
          refHeader.current.style.backgroundSize = 100 + offset / 20 + "%";
          //refHeader.current.style.height = 100 + offset / 20 + "vh";
        }
        console.log(
          offset,
          refHeader.current.offsetTop,
          refHeader.current.offsetHeight
        );
      }
      //console.log(offset / 5 + "%");
    });
  }, []);
  return (
    <header id="" ref={refHeader}>
      <div className="content" ref={ref}>
        <div className="fontSize45 text-shadow">¡Nos casamos!</div>
        <div className="fontSize90 font-bold text-shadow">Lena & Marcos</div>
        <div className="fontSize30 text-shadow">
          {invitado?.nickname},<br />
          te invitamos a formar parte de este momento
        </div>
      </div>
    </header>
  );
}
export default Header;
