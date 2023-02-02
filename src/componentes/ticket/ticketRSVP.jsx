export default function TicketRSVP({
  invitado,
  confirmed,
  assist,
  onChange,
  onConfirm,
}) {
  return (
    <div className="ticketRSVP">
      {/* <p className="text-center titleticket">
    ¡Gracias, {invitado ? invitado.nickname : ""}!
  </p> */}
      <h3 className="center">RSVP</h3>
      <p>Por favor responde antes del 20 de agosto de 2023</p>
      <form>
        <div>
          <div className="ticketsNumbe text-center">
            {invitado?.boletos} Boletos
            {invitado?.ninos && invitado.ninos !== 0 && invitado.boletos > 0
              ? ", " + invitado.ninos + "niño(s)"
              : null}
          </div>
        </div>
        <div className="d-grid gap-2 mt-4">
          {confirmed ? (
            assist ? (
              <div className="text-center" id="acceptmsg">
                <strong>
                  Gracias por tu confirmación, nos vemos en la boda
                </strong>
              </div>
            ) : (
              <div className="text-center" id="denymsg">
                <strong>
                  No va a ser posible acompañarnos <br />
                  ¿Cambiaste de opinión?
                </strong>
              </div>
            )
          ) : (
            <>
              <button
                id="bYes"
                className="ticketButton btn btn-outline-success text-center"
                onClick={onConfirm}
              >
                Confirmar elección
              </button>
              <button
                id="bChange"
                className="ticketButton btn btn-outline-secondary text-center"
                onClick={onConfirm}
              >
                No usare todos los boletos
              </button>
              <button
                id="bNo"
                className="ticketButton btn btn-outline-danger"
                onClick={onConfirm}
              >
                Lo siento, no podre asistir
              </button>
            </>
          )}
        </div>
        {confirmed ? (
          <div className="d-grid">
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
