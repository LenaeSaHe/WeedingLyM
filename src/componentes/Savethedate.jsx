import googleCalendar from "../img/calendar_google.png";
import googleicon from "../img/google.png";
import Paragraph from "./common/Paragraph";
import Title from "./common/Title";
import heartsave from "../img/imgsave.png";
import argollas from "../img/argollas.png";
import classNames from "classnames";
import { useRef, useState, useEffect } from "react";

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

function Savethedate({ invitado }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const callbackFunc = (entries) => {
    entries.forEach((entry) => {
      setShow(entry.isIntersecting);
      if (entry.isIntersecting !== show) {
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);
  return (
    <section
      className="contB"
      id="secDate"
      ref={ref}
      style={{ overflow: "hidden" }}
    >
      <div
        className={classNames("cristalSave", show ? "showSaveDate" : null)}
        id="contDate"
      >
        <Title separator={false}>Save the date</Title>
        <img src={heartsave} width="380" id="heartsave" />
        <Paragraph short>
          {invitado ? invitado.nickname : ""}, {invitado?.nickname.split(" ").length>1 ? "son " : "eres "} 
          muy importante para nostros,
          y en este día tan especial en el que frente a Dios y a nuestros seres
          amados recibiremos la bendición de un nuevo capítulo en nuestras
          vidas, deseamos nos acompañe{invitado?.nickname.split(" ").length>1 ? "n" : "s"} el próximo
        </Paragraph>

        <div className="hrSave">
          <div className="hrSaveLeft">SÁBADO</div>
          <div className="hrSaveCenter">
            <div className="hrSaveSmall">NOV</div>
            <div className="hrSaveBig">04</div>
            <div className="hrSaveSmall">2023</div>
          </div>
          <div className="hrSaveRight">14 HRS</div>
        </div>

        <a
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWRzcXZ2cWg4ZjlxdjR2cW9yOW1rZGNidGIgZjBlYjRlNzdiZDZmZmRjNjQ4NzU5NWU4NjEzZWE5MjBiNGY1YTRlNDYyZjdhMGIwZjI5ZTg2OTI2MzA2NTE2Y0Bn&tmsrc=f0eb4e77bd6ffdc6487595e8613ea920b4f5a4e462f7a0b0f29e86926306516c%40group.calendar.google.com"
          target="_blank"
          className={classNames("btn", "btn-outline-primary", "my-2")}
        >
          <div className="googleButton">
            <img src={googleicon} width="30" />
            <div>AGREGAR EVENTO A MI CALENDARIO</div>
          </div>
        </a>
      </div>
    </section>
  );
}
export default Savethedate;
