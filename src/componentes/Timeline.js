import iglesia from "../img/church-2-32.ico";
import civil from "../img/bookmark-32.ico";
import coctel from "../img/bar-32.ico";
import party from "../img/heart-15-48.ico";
import Event from "./timeline/Event";
import Title from "./common/Title";
import { useEffect, useState } from "react";

const civilEvent = {
  id: 3,
  titulo: "Ceremonia civil",
  imagen: civil,
  time: "15:00 hrs",
  special: true, //only for specific people
};
const damasEvent = {
  id: 0,
  titulo: "Fotos con damas de honor",
  imagen: civil,
  time: "12:00 hrs",
  special: true, //only for specific people
};

const damosEvent = {
  id: 0,
  titulo: "Fotos con best man ",
  imagen: civil,
  time: "12:00 hrs",
  special: true, //only for specific people
};

function Timeline({ invitado }) {
  // listen for events
  const [events, setEvents] = useState([
    {
      id: 1,
      titulo: "Ceremonia religiosa",
      imagen: iglesia,
      time: "13:30 hrs",
    },
    {
      id: 2,
      titulo: "Coctel de bienvenida",
      imagen: coctel,
      time: "15:00 hrs",
    },
    {
      id: 4,
      titulo: "Recepción",
      imagen: party,
      time: "16:00 hrs",
    },
    {
      id: 5,
      titulo: "Pachangón masivo",
      imagen: party,
      time: "16:30 hrs",
    },
    {
      id: 6,
      titulo: "Sorpresas",
      imagen: party,
      time: "17:00 hrs",
    },
  ]);

  useEffect(() => {
    let res = [...events];
    if (invitado?.civil === true) {
      res.splice(2, 0, civilEvent);
    }
    if (invitado?.de === "Marcos" && invitado?.damo) {
      res.unshift(damosEvent);
    }

    if (invitado?.de === "Lena" && invitado?.dama) {
      res.unshift(damasEvent);
    }
    setEvents([...res]);
  }, [invitado]);

  return (
    <section className="contB" id="timeline">
      <div className="container">
        <div className="row content">
          <div className="col-12 back">
            <Title>Timeline </Title>
            <ul>
              {events.map((event) => (
                <li>
                  <Event key={event.id} {...event} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Timeline;
