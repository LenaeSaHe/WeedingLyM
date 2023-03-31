import { useEffect, useRef, useReducer, useState, forwardRef } from "react";
import classNames from "classnames";
import { preloadImages } from "../datos/util";
import { default as images } from "../datos/images";
import rings from "../img/loadingWeeding02.gif";

const reducer = (p) => !p;

function Backdrop({ invitado }) {
  const progressRef = useRef(0);
  const [, render] = useReducer(reducer, false);
  const [loading, setLoading] = useState(true);
  const [hideBackdrop, setHideBackdrop] = useState(false);
  const ref = useRef();

  useEffect(function () {
    addScroll();

    preloadImages(
      images,
      () => {
        /* onFinish */
        setTimeout(() => {
          setHideBackdrop(true);
          setLoading(false);
        }, 1000);
      },
      (progress) => {
        /* onProgress */
        progressRef.current = progress * 100;
        render();
      }
    );
  }, []);
  /**
   * Add scroll to body after animation ends
   */
  function addScroll() {
    ref.current.addEventListener("animationend", function () {
      document.querySelector("body").style.overflow = "auto";
    });
  }
  return (
    <div
      id="backdrop"
      ref={ref}
      className={hideBackdrop ? classNames("backdropAnimation") : null}
    >
      <div className="backdropContainer">
        {loading ? <LoadingScreen ref={progressRef} /> : null}
        {hideBackdrop ? <WelcomeScreen invitado={invitado} /> : null}
      </div>
    </div>
  );
}

const LoadingScreen = forwardRef((props, ref) => {
  return (
    <>
      <div className="loadingContainer">
        <img src={rings} />
      </div>
      <div className="messagePercent">
        <span>Preparando tu invitacion...</span> <br />
        {ref.current}% lista
      </div>
    </>
  );
});

function WelcomeScreen({ invitado }) {
  return (
    <div>
      <div>
        <span className={classNames("fadeIn", "greetingBackdrop")}>
          ¡Hola, {invitado ? invitado.nickname.split(" ")[0] : ""}!
        </span>
      </div>
      <div className="bd-background">
        <div className="bd-background-layer layer1"></div>
        <div className="bd-background-layer layer2"></div>
        <div className="bd-background-layer layer3"></div>
        <div className="bd-background-layer layer4"></div>
        <div className="bd-background-layer layer5"></div>
        <div className="bd-background-layer layer6"></div>
        <div className="bd-background-layer layer7"></div>
        <div className="bd-background-layer layer8"></div>
      </div>
      <div className={classNames("fadeIn", "message m-auto mt-3")}>
        Te invitamos a compartir este bello momento con nosotros
      </div>
    </div>
  );
}
export default Backdrop;
