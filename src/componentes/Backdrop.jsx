import { useEffect, useRef, useReducer, useState } from "react";
import logo from "../img/L&M.png";
import loadingGif from "../img/loadingWeeding.gif";
import classNames from "classnames";

import { preloadImages } from "../datos/util";
import mainMyL from "../img/mainLyM.jpg";
import mainMyL2 from "../img/mainLyM2.jpg";
import mainMyL3 from "../img/mainLyM3.jpg";
import mainMyL4 from "../img/mainLyM4.jpg";

const reducer = (p) => !p;

function Backdrop({ invitado }) {
  const loadingRef = useRef(null);
  const progressRef = useRef(0);
  const [, render] = useReducer(reducer, false);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    addScroll();

    const images = [logo, mainMyL, mainMyL2, mainMyL3, mainMyL4];
    preloadImages(
      images,
      () => {
        /* onFinish */
        if (loadingRef.current) {
          //loadingRef?.current.classList.add("fadeOut");
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }

        // console.log("item", averageRef.current);
      },
      (progress) => {
        /* onProgress */
        progressRef.current = progress * 100;
        render();
      }
    );
  }, []);
  const ref = useRef();
  {
    /* obtener la referencia del html*/
  }
  function addScroll() {
    ref.current.addEventListener("animationend", function () {
      document.querySelector("body").style.overflow = "auto";
    });
  }
  return (
    <div
      id="backdrop"
      ref={ref}
      className={!loading ? classNames("backdropAnimation") : null}
    >
      <div className="backdropContainer">
        <div>
          <span className={classNames("fadeIn delay-5", "greetingBackdrop")}>
            ¡Hola, {invitado ? invitado.nickname.split(" ")[0] : ""}!
          </span>
        </div>
        <img className="logo mt-3" src={logo} />
        <div className={classNames("fadeIn delay-5", "message m-auto mt-3")}>
          Te invitamos a compartir este bello momento con nosotros
        </div>
        <div ref={loadingRef} className="loadingContainer"></div>
        <div className="messagePercent">{progressRef.current}% ...</div>

      </div>
    </div>
  );
}
export default Backdrop;
