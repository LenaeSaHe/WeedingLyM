import Boleto from "./Boleto";
import Title from "./common/Title";

function Footer({ invitado }) {
  return (
    <section className="contA ticketsContainer">
      <div className="col-12 bottom">
        <Title>Por favor, confírmanos tu asistencia</Title>
      </div>
      <Boleto invitado={invitado} />
    </section>
  );
}
export default Footer;
