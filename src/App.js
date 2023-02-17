import "./css/style.css";
import { useEffect } from "react";

import Header from "./componentes/Header";
import Lovequote from "./componentes/Lovequote";
import Savethedate from "./componentes/Savethedate";
import Countdown from "./componentes/Countdown";
import Family from "./componentes/Family";
import Location from "./componentes/Location";
import Giveaway from "./componentes/Giveaway";
import Hotel from "./componentes/hotel";
import Footer from "./componentes/Footer";
import Timeline from "./componentes/Timeline";
import Backdrop from "./componentes/Backdrop.jsx";
import { useParams } from "react-router-dom";
import data from "./datos/invitados.json";
import Protocolocovid from "./componentes/Protocolocovid";
import GooglePhotos from "./componentes/GooglePhotos";
import { useAppContext } from "./datos/store";

function App() {
  /* Función = Componente debe llevar un return dentro de la funcion jsx */
  const params = useParams();
  const store = useAppContext();

  async function loadInvitadoInfo() {
    if (params.id) {
      console.log(data);

      //Buscamos en los datos locales
      const found = data.find(
        (item) => item.id.toString() === params.id.toString()
      );
      if (found) {
        //si lo encontramos buscamos en firebase
        if (await store.loadInvitado(params.id, found)) {
          //Si lo encontró actualizamos las propiedades con las locales
        } else {
          //No pasa nada
        }
      } else {
        throw new Response("Not Found", { status: 404 });
      }
    }
  }
  useEffect(() => {
    loadInvitadoInfo();
  }, []);

  return (
    <>
      {/*Backdrop*/}
      <Backdrop invitado={store.invitado} />
      {/*header*/}
      <Header invitado={store.invitado} />
      {/*Lovequote*/}
      <Lovequote />
      {/*Save the date*/}
      <Savethedate invitado={store.invitado} />
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
      <GooglePhotos invitado={store.invitado} />
      {/* Confirm */}
      <Footer id={params.id} />
      {/* Protocolo covid*/}
      <Protocolocovid />
    </>
  );
}
export default App;
