import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default function TicketRSVP({
  invitado,
  confirmed,
  assist,
  onChange,
  onConfirm,
}) {
  const { width, height } = useWindowSize();

  function ResponsesForm({ confirmed, assist }) {
    if (confirmed) {
      if (assist) {
        return (
          <div className="text-center" id="acceptmsg">
            <strong>Gracias por tu confirmación, nos vemos en la boda</strong>
          </div>
        );
      } else {
        return (
          <div className="text-center" id="denymsg">
            <strong>
              No me será posible acompañarlos <br />
              ¿Cambiaste de opinión?
            </strong>
          </div>
        );
      }
    } else {
      return (
        <>
          <button
            id="bYes"
            className="ticketButton btn btn-outline-success text-center"
            onClick={onConfirm}
          >
            Confirmar asistencia
          </button>
          <ModifyTickets modificar={invitado?.modificar} />
          <button
            id="bNo"
            className="ticketButton btn btn-outline-danger"
            onClick={onConfirm}
          >
            Lo siento, no podre asistir
          </button>
        </>
      );
    }
  }

  function ModifyTickets({ modificar }) {
    if (modificar) {
      return (
        <button
          id="bChange"
          className="ticketButton btn btn-outline-secondary text-center"
          onClick={onConfirm}
        >
          No usaré todos los boletos
        </button>
      );
    }
    return null;
  }

  function getInvitadosName() {
    if (invitado) {
      if (invitado.boletos === 1) {
        return `1 boleto para ${invitado.nickname}`;
      } else if (invitado.nombreInvitados) {
        return `${invitado.boletos} Boletos para ${invitado.nombreInvitados}`;
      } else {
        return `${invitado.boletos} boletos`;
      }
    } else {
      return "";
    }
  }
  return (
    <div className="ticketRSVP">
      {/* <p className="text-center titleticket">
    ¡Gracias, {invitado ? invitado.nickname : ""}!
  </p> */}
      <h3 className="center">RSVP</h3>
      <p className="center">
        Por favor responde antes del{" "}
        {invitado?.deadline ?? "20 de agosto de 2023"}
      </p>
      <form>
        <div>
          <div className="ticketsNumber text-center">
            <strong>{getInvitadosName()}</strong>
          </div>
        </div>
        <div className="d-grid gap-2 mt-4">
          <ResponsesForm confirmed={confirmed} assist={assist} />
        </div>
        {confirmed ? (
          <div className="d-grid">
            {assist && (
              <Confetti
                numberOfPieces={400}
                width={width}
                height={height}
                recycle={false}
              />
            )}
            <button
              className="ticketButton btn btn-outline-success text-center"
              onClick={onChange}
            >
              Cambiar mi elección
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
}
