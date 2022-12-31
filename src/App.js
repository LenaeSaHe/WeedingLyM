import "./css/style.css";
import { useEffect, useRef, useState } from "react";

import Header from "./componentes/Header";
import Lovequote from "./componentes/Lovequote";
import Savethedate from "./componentes/Savethedate";
import Countdown from "./componentes/Countdown";
import Family from "./componentes/Family";
import Location from "./componentes/Location";
import Giveaway from "./componentes/Giveaway";
import Hotel from "./componentes/hotel";
import Instagram from "./componentes/Instagram";
import Footer from "./componentes/Footer";
import Timeline from "./componentes/Timeline";
import Backdrop from "./componentes/Backdrop.jsx";
import { useParams } from "react-router-dom";
import data from "./datos/invitados.json";

function App() {
  /* Función = Componente debe llevar un return dentro de la funcion jsx */
  const [invitado, setInvitado] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      console.log(data);
      const found = data.find(
        (item) => item.id.toString() === params.id.toString()
      );
      if (found) {
        setInvitado(found);
      } else {
        throw new Response("Not Found", { status: 404 });
      }
    }
  }, []);

  return (
    <>
      {/*Backdrop*/}
      <Backdrop invitado={invitado} />
      {/*header*/}
      <Header />
      {/*Lovequote*/}
      <Lovequote />
      {/*Save the date*/}
      <Savethedate />
      {/*countdown*/}
      <Countdown />
      {/* Family */}
      <Family />
      {/*Location*/}
      <Location />
      {/* Give away */}
      <Giveaway />
      {/* timeline */}
      <Timeline />
      {/* Hotel */}
      <Hotel />
      {/* Instagram */}
      <Instagram />
      {/* Confirm */}
      <Footer />
    </>
  );
}
export default App;
