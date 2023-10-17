import Boleto from "./Boleto";
import Title from "./common/Title";
import { useAppContext } from "../datos/store";
import Paragraph from "./common/Paragraph";

function Footer({ id }) {
  const store = useAppContext();
  return (
    <section className="contA ticketsContainer">
      <ShowTicket id={id} />
    </section>
  );
}

function ShowTicket({ id }) {
  return (
    <>
      <div className="col-12 bottom">
        <Title>Por favor, confírmanos tu asistencia</Title>
      </div>

      <Boleto id={id} />
    </>
  );
}

function ShowClosedTicket({ store }) {
  return (
    <div className="col-12 bottom">
      <Title>¡Todo listo! Nos vemos el día de la boda</Title>
      <div className="ticketsNumber text-center pt-4">{`${store.invitado?.boletos} boletos para ${store.invitado?.nombreInvitados}`}</div>
      <Paragraph>
        Si crees que no vas a poder asistir de último momento, por favor
        avísanos lo más pronto posible.
      </Paragraph>
    </div>
  );
}
export default Footer;
