import iglesia from "../img/church-2-32.ico";
import civil from "../img/bookmark-32.ico";
import coctel from "../img/bar-32.ico";
import party from "../img/heart-15-48.ico";
import Event from "./timeline/Event";
import Title from "./common/Title";

function Timeline() {
  // listen for events
  return (
    <section className="contB" id="timeline">
      <div className="container">
        <div className="row content">
          <div className="col-12 back">
            <Title>Timeline</Title>
            <ul>
              <li>
                <Event
                  titulo="Ceremonia religiosa"
                  imagen={iglesia}
                  time="13:30 hrs"
                />
              </li>
              <li>
                <Event
                  titulo="Coctel de bienvenida"
                  imagen={coctel}
                  time="15:00 hrs"
                />
              </li>
              <li>
                <Event
                  titulo="Ceremonia civil"
                  imagen={civil}
                  time="15:30 hrs"
                />
              </li>
              <li>
                <Event titulo="Recepción" imagen={party} time="16:00 hrs" />
              </li>
              <li>
                <Event
                  titulo="Pachangón masivo"
                  imagen={party}
                  time="16:30 hrs"
                />
              </li>
              <li>
                <Event titulo="Sorpresas" imagen={party} time="17:00 hrs" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Timeline;
