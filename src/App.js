import "./css/style.css";
import { useEffect } from "react";

import Header from "./componentes/Header";
import Lovequote from "./componentes/Lovequote";
import Savethedate from "./componentes/Savethedate";
import Countdown from "./componentes/Countdown";
import Family from "./componentes/Family";
import GalleryOne from "./componentes/GalleryOne";
import Location from "./componentes/Location";
import Giveaway from "./componentes/Giveaway";
import Hotel from "./componentes/hotel";
import Footer from "./componentes/Footer";
import Timeline from "./componentes/Timeline";
import GalleryTwo from "./componentes/GalleryTwo";
import Backdrop from "./componentes/Backdrop.jsx";
import { useParams, useLoaderData } from "react-router-dom";
import data from "./datos/dataInvitados.json";
import Protocolocovid from "./componentes/Protocolocovid";
import GooglePhotos from "./componentes/GooglePhotos";
import { useAppContext } from "./datos/store";
import { logAccess } from "./datos/firebase";

function App() {
  /* Función = Componente debe llevar un return dentro de la funcion jsx */
  const params = useParams();
  const store = useAppContext();
  const data = useLoaderData();

  async function loadInvitadoInfo() {
    if (await store.loadInvitado(params.id, data)) {
    }
  }
  useEffect(() => {
    loadInvitadoInfo();
  }, []);

  useEffect(() => {
    if (store.invitado) {
      document.title = `Lena & Marcos 2023 - ${store.invitado.nickname}`;
      const access = {
        id: store.invitado.id,
        nickname: store.invitado.nickname,
        lastAccess: new Date(),
      };
      if (window.location.hostname !== "localhost") {
        logAccess(store.invitado.id, store.invitado.nickname, new Date());
      }
    }
  }, [store.invitado]);

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
      {/* Gallery 1 (2)*/}
      <GalleryOne />
      {/*Location*/}
      <Location />
      {/* Give away */}
      <Giveaway />
      {/* timeline */}
      <Timeline invitado={store.invitado} />
      {/* GalleryTwo */}
      <GalleryTwo />
      {/* Hotel */}
      <Hotel />
      {/* Instagram */}
      <GooglePhotos invitado={store.invitado} />
      {/* Confirm */}
      <Footer id={params.id} invitado={store.invitado} />
      {/* Protocolo covid*/}
      <Protocolocovid />
    </>
  );
}
export default App;
