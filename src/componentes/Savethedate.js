import googleCalendar from "../img/calendar_google.png";
import googleicon from "../img/google.png";
function Savethedate({ invitado }) {
  return (
    <section className="contB" id="secDate">
      <div className="cristalSave" id="contDate">
        <div className="txtTitles">Save the date</div>
        <p className="txtParagraph w-50">
          {invitado ? invitado.nickname : ""}, eres muy importante para nostros,
          y en este día tan especial en el que frente a Dios y a nuestros seres
          amados recibiremos la bendición de un nuevo capítulo en nuestras
          vidas, deseamos nos acompañes el próximo
        </p>
        <div className="txtTitles">
          <p>
            <b>04.Nov.23</b>
          </p>
        </div>
        <small className="hrSave txtParagraph">14:00 hrs.</small>
        <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmVhaG5kOTJzZmhjbG1qa2VzcWVoZmg1djQgbGl6enkuc2FoZUBt&tmsrc=lizzy.sahe%40gmail.com" target="_blank">
          <img src={googleCalendar}/>
        </a>
        <small className="txtParagraph">
          <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmVhaG5kOTJzZmhjbG1qa2VzcWVoZmg1djQgbGl6enkuc2FoZUBt&tmsrc=lizzy.sahe%40gmail.com" target="_blank">
            <strong>Agrega el evento a tu calendario en </strong>&nbsp;
            <img src={googleicon} width="30"/>
          </a>
        </small>
      </div>
    </section>
  );
}
export default Savethedate;
