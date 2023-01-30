import Boleto from "./Boleto";
import Title from "./common/Title";

function Footer({ invitado,id }) {
  return (
    <section className="contA ticketsContainer">
      <div className="col-12 bottom">
        <Title>Por favor, confírmanos tu asistencia</Title>
      </div>
      <Boleto invitado={invitado} id ={id}/>
    </section>
  );
}
export default Footer;
