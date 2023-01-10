export default function Boletos({ invitado }) {
  return (
    <div className="ticketContainer">
      <div className="ticketDate">Sabado 04 de noviembre de 2023</div>
      <div className="ticketContent">
        <div className="ticketInfo">
          <div>Lena & Marcos</div>
          <div>Finca San Pedro</div>
          <div>Bugambilias 2 Fracc, Brisas, 62584 Temixco, Morelos</div>
          <div>14:00 hrs</div>
        </div>
        <div className="ticketRSVP">
          <h3 className="center">RSVP</h3>
          <p>Por favor responde antes del 20 de agosto de 2023</p>
          <form>
            <div>
              <span>{invitado?.boletos ?? ""} adultos</span>
              <span>
                {invitado?.ninos && invitado.ninos > 0
                  ? `${invitado.ninos} niño`
                  : ""}
              </span>
            </div>
            <div className="d-grid gap-2">
              <button className="ticketButton btn btn-outline-success text-center">
                Confirmar elección
              </button>
              <button className="ticketButton btn btn-outline-secondary">
                Lo siento, no podre asistir
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
