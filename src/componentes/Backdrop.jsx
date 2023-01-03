import { useEffect, useRef } from "react";
import logo from "../img/mono.gif";
function Backdrop({ invitado }) 
{
  useEffect (function(){
    addScroll();
  }, [])
  const ref = useRef(); {/* obtener la referencia del html*/}
  function addScroll()
  {
    ref.current.addEventListener("animationend", function()
    {
      document.querySelector("body").style.overflow ="auto";
    })
  }
  return (
    <div id="backdrop" ref={ref}>
      <div>
        <span className="title fadeIn delay-5">
          ¡Hola, {invitado ? invitado.nombre.split(" ")[0] : ""}!
        </span>
      </div>
      <img className="logo" src={logo} />
      <div className="message w-50 text-center fadeIn delay-5">
        Te invitamos a compartir este bello momento con nosotros
      </div>
    </div>
  );
}
export default Backdrop;
