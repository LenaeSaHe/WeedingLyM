import iglesia from "../img/church-2-32.ico";
import civil from "../img/bookmark-32.ico";
import coctel from "../img/bar-32.ico";
import party from "../img/heart-15-48.ico";
import { useRef, useEffect } from "react";
import Event from "./Event";

function Timeline() {
  const li1 = useRef(); /* referencia "queryselector" */
  const li2 = useRef();
  const li3 = useRef();
  const li4 = useRef();
  const li5 = useRef();
  const li6 = useRef();
  const li7 = useRef();
  const li8 = useRef();
  const items = [
    li1,
    li2,
    li3,
    li4,
    li5,
    li6,
    li7,
    li8,
  ]; /*arreglo de los useref*/

  function isItemInView(item) {
    var rect = item.current.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].current.classList.add("show");
      }
    }
  }
  useEffect(() => {
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  }, []);
  // listen for events
  return (
    <section className="contB" id="timeline">
      <div className="container">
        <div className="row content">
          <div className="col-12 back">
            <h1 className="text-center txtTitles">Time line</h1>
            <ul>
              <li ref={li1}>
                <Event
                  titulo="Ceremonia religiosa"
                  imagen={iglesia}
                  time="14:00 hrs"
                />
              </li>
              <li ref={li2}>
                <Event
                  titulo="Ceremonia civil"
                  imagen={civil}
                  time="14:00 hrs"
                />
              </li>
              <li ref={li3}>
                <Event titulo="Coctel" imagen={coctel} time="14:00 hrs" />
              </li>
              <li ref={li4}>
                <Event titulo="Recepción" imagen={party} time="14:00 hrs" />
              </li>
              <li ref={li5}>
                <Event titulo="Recepción" imagen={party} time="14:00 hrs" />
              </li>
              <li ref={li6}>
                <Event titulo="Recepción" imagen={party} time="14:00 hrs" />
              </li>
              <li ref={li7}>
                <Event titulo="Recepción" imagen={party} time="14:00 hrs" />
              </li>
              <li ref={li8}>
                <Event titulo="Recepción" imagen={party} time="14:00 hrs" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Timeline;
