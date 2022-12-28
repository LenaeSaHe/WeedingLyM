import logo from "./img/mono.gif"
import photoFamF from "./img/papas.jpg"
import photoFamM from "./img/papas.jpg"
import maps from "./img/maps.png"
import liverpool from "./img/liver.png"
import amazon from "./img/amazon.png"
import iglesia from "./img/church-2-32.ico"
import civil from "./img/bookmark-32.ico"
import coctel from "./img/bar-32.ico"
import party from "./img/heart-15-48.ico"

import "./css/style.css"
import { useEffect, useRef, useState } from "react"

import Header from "./componentes/Header";
import Lovequote from "./componentes/Lovequote";
import Savethedate from "./componentes/Savethedate"

function App() /* Función = Componente debe llevar un return dentro de la funcion jsx */
{
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const item1 = useRef();
  const item2 = useRef();
  const item3 = useRef();
  const item4 = useRef();

  useEffect(()=>{

    const DATE_TARGET = new Date("11/04/2023 03:00 PM");
    /*const SPAN_DAYS = document.querySelector("span#days");
    const SPAN_HOURS = document.querySelector("span#hours");
    const SPAN_MINUTES = document.querySelector("span#minutes");
    const SPAN_SECONDS = document.querySelector("span#seconds");*/
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;
    function updateCountdown() {
      const NOW = new Date();
      const DURATION = DATE_TARGET - NOW;
      const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
      const REMAINING_HOURS = Math.floor(
        (DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR
      );
      const REMAINING_MINUTES = Math.floor(
        (DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE
      );
      const REMAINING_SECONDS = Math.floor(
        (DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND
      );
      /*SPAN_DAYS.textContent = REMAINING_DAYS;
      SPAN_HOURS.textContent = REMAINING_HOURS;
      SPAN_MINUTES.textContent = REMAINING_MINUTES;
      SPAN_SECONDS.textContent = REMAINING_SECONDS;*/
      setDays(REMAINING_DAYS);
      setHours(REMAINING_HOURS);
      setMinutes(REMAINING_MINUTES);
      setSeconds(REMAINING_SECONDS);
    }
    updateCountdown();
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

    /* timeline */
    /*var items = document.querySelectorAll("li");*/
    var items = [item1,item2,item3,item4];
    function isItemInView(item) {
      /*var rect = item.getBoundingClientRect();*/
      var rect = item.current.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isItemInView(items[i])) {
          items[i].classList.add("show");
        }
      }
    }
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);


  },[])
  return <> 
  {/*header*/}
  <div id="backdrop">
    <img src={logo} className="center" />
  </div>
  <Header/>
  {/*Lovequote*/}
  <Lovequote/>
  {/*Save the date*/}
  <Savethedate/>
  {/*countdown*/}
    <section className="contA">
      <div className="container">
        <div className="content row">
          <div className="col-12">
            <p className="text-center txtTitles">Ya falta muy poco</p>
          </div>
          <div className="col-12">
            <p className="text-center txtBadage">
              Dias
              <span className="badge text-bg-secondary text-bg-light" id="days">{days}</span>
              Horas
              <span className="badge text-bg-secondary text-bg-light" id="hours">{hours}</span>
              Minutos
              <span className="badge text-bg-secondary text-bg-light" id="minutes">{minutes}</span>
              Segundos
              <span className="badge text-bg-secondary text-bg-light" id="seconds">{seconds}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Family */}
    <section className="contB">
      <div className="container">
        <div className="content row">
          <div className="col-8 boxfam text-center txtTitles back">
            Padres de la novia
            <hr />
            <blockquote className="nomPadres text-center">
              - Julio César Sánchez Rivera
            </blockquote>
            <blockquote className="nomPadres text-center">
              - Maria Elena Hernández Hernández
            </blockquote>
          </div>
          <div className="col-4 text-center back boxphoto">
            <img src={photoFamF} className="img-fluid photofam" />
          </div>
          <div className="col-4 text-center back boxphoto">
            <img src={photoFamM} className="img-fluid photofam" />
          </div>
          <div className="col-8 boxfam text-center txtTitles back">
            Padres del novio
            <hr />
            <blockquote className="nomPadres text-center">
              - Marcos Rivas
            </blockquote>
            <blockquote className="nomPadres text-center">
              - Alejandra Rojas
            </blockquote>
          </div>
        </div>
      </div>
    </section>
    {/*Location*/}
    <section className="contLoc">
      <div className="container">
        <div className="row content">
          <div className="col-12" id="garden">
            <div className="cardLoc center">
              <h3 className="cardLoc-title text-center">Finca San Pedro</h3>
              <p className="text-center">
                Bugambilias 2 Fracc, Brisas, 62584 Temixco, Mor. <br />
                00:00 hrs.
              </p>
              <p className="text-center">
                <img src={maps} width="100" height="100" className="center" />
              </p>
              <p className="text-center">
                <small>Da clic en el botón inferior para acceder al mapa</small>
              </p>
              <a className="text-center" href="#" id="btnlink">Clic</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Give away */}
    <section className="contA">
      <div className="container">
        <div className="row content">

          <div className="col-12 back" id="divtable">
            <h1 className="text-center txtTitles">Mesa de regalos</h1>
            <p className="text-center txtText">
              ¡ Valoramos mucho tu asistencia !<br />
              Si deseas tener algún detalle con nosotros, te dejamos algunas
              sugerencias
            </p>
          </div>

          <div className="col-12 backable back">
            <div className="card center boxStore anyborder">
              <div className="card-body anyborder backR">
                <h5 className="card-title text-center txtTitles">Liverpool</h5>
                <p className="card-text text-center anyborder">
                  <img src={liverpool} className="card-img-top brand" />
                </p>
                <p className="text-center">
                  <a href="#" className="btn btn-primary text-center"
                    >Ver mesa de regalos</a>
                </p>
              </div>
            </div>
          </div>

          <div className="card center boxStore anyborder">
              <div className="card-body anyborder backR">
                <h5 className="card-title text-center txtTitles">Amazon</h5>
                <p className="card-text text-center anyborder">
                  <img src={amazon} className="card-img-top brand"/>
                </p>
                <p className="text-center">
                  <a href="#" className="btn btn-primary text-center"
                    >Ver mesa de regalos</a>
                </p>
              </div>
            </div>

        </div>
      </div>
    </section>
    {/* timeline */}
    <section className="contB">
      <div className="container">
        <div className="row content">
          <div className="col-12 back">
            <h1 className="text-center txtTitles">Time line</h1>
            <ul>
              <li>
                <div>
                  <time>Ceremonia religiosa <img src={iglesia} className="center" /></time>
                </div>
              </li>
              <li>
                <div>
                  <time>Ceremonia cívil <img src={civil} className="center" /></time>
                </div>
              </li>
              <li>
                <div>
                  <time>Coctel <img src={coctel} className="center" /></time>
                </div>
              </li>
              <li>
                <div>
                  <time>Recepción <img src={party} className="center" /></time>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* Hotel */}
    <section className="contA">
      <div className="container">
        <div className="row content">
          <div className="col-6 txtTitles back">Hospedaje 1</div>
          <div className="col-6 txtTitles back">Hospedaje 2</div>
        </div>
      </div>
    </section>
    {/* Instagram */}
    <section className="contB">
      <div className="container">
        <div className="row content">
          <div className="col-12 back">
            <h1 className="text-center txtTitles">#Hashtag del evento</h1>
            <p className="text-center">
              Comparte con nosotros todas tus fotografías, historias, reels, o
              videos que captures durante el evento, usando el hashtag
              <b><i>#BodaLyM</i></b> esto en Instagram
              <img src="img/instagram-32.ico" /> y Facebook
              <img src="img/facebook-32.ico" />
            </p>
          </div>
          <div className="col-12" id="instagram"></div>
        </div>
      </div>
    </section>
    {/* Confirm */}
    <div className="col-12 bottom">
      <p className="text-center txtText">
        Por favor, confirmanos tu asistencia <br />
        <button type="button" className="btn btn-light">Si, asistiré</button>
      </p>
    </div>
  </> 
}
export default App;
