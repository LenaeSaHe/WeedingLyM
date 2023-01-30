import googleCalendar from "../img/calendar_google.png";
import googleicon from "../img/google.png";
import Paragraph from "./common/Paragraph";
import Title from "./common/Title";
import heartsave from "../img/imgsave.png";

function Savethedate({ invitado }) {
  return (
    <section className="contB" id="secDate">
      <div className="cristalSave" id="contDate">
        <img src={heartsave} width="380" id="heartsave"/>
        <Title>Save the date</Title>
        <Paragraph short>
          {invitado ? invitado.nickname : ""}, eres muy importante para nostros,
          y en este día tan especial en el que frente a Dios y a nuestros seres
          amados recibiremos la bendición de un nuevo capítulo en nuestras
          vidas, deseamos nos acompañes el próximo
        </Paragraph>

        <div className="txtTitles">
          <p>
            <b>04.Nov.23</b>
          </p>
        </div>
        <small className="hrSave txtParagraph">14:00 hrs.</small>
        <a
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWRzcXZ2cWg4ZjlxdjR2cW9yOW1rZGNidGIgZjBlYjRlNzdiZDZmZmRjNjQ4NzU5NWU4NjEzZWE5MjBiNGY1YTRlNDYyZjdhMGIwZjI5ZTg2OTI2MzA2NTE2Y0Bn&tmsrc=f0eb4e77bd6ffdc6487595e8613ea920b4f5a4e462f7a0b0f29e86926306516c%40group.calendar.google.com"
          target="_blank"
        >
          <img src={googleCalendar} />
        </a>
        <small className="txtParagraph">
          <a
            href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWRzcXZ2cWg4ZjlxdjR2cW9yOW1rZGNidGIgZjBlYjRlNzdiZDZmZmRjNjQ4NzU5NWU4NjEzZWE5MjBiNGY1YTRlNDYyZjdhMGIwZjI5ZTg2OTI2MzA2NTE2Y0Bn&tmsrc=f0eb4e77bd6ffdc6487595e8613ea920b4f5a4e462f7a0b0f29e86926306516c%40group.calendar.google.com"
            target="_blank"
          >
            <strong>Agrega el evento a tu calendario en </strong>&nbsp;
            <img src={googleicon} width="30" />
          </a>
        </small>
      </div>
    </section>
  );
}
export default Savethedate;
