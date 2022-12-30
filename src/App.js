import "./css/style.css"
import { useEffect, useRef, useState } from "react"

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
import Backdrop from "./componentes/Backdrop";

function App() /* Función = Componente debe llevar un return dentro de la funcion jsx */
{
  const item1 = useRef();
  const item2 = useRef();
  const item3 = useRef();
  const item4 = useRef();

  return <> 
  {/*Backdrop*/}
  <Backdrop/>
  {/*header*/}
  <Header/>
  {/*Lovequote*/}
  <Lovequote/>
  {/*Save the date*/}
  <Savethedate/>
  {/*countdown*/}
  <Countdown/>
  {/* Family */}
  <Family/>
  {/*Location*/}
  <Location/>
  {/* Give away */}
  <Giveaway/>
  {/* timeline */}
  <Timeline/>
  {/* Hotel */}
  <Hotel/>
  {/* Instagram */}
  <Instagram/>
  {/* Confirm */}
  <Footer/>
  </> 
}
export default App;
