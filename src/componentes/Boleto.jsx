import { useState } from "react";
import { useMemo } from "react";
import { getInvitadosNumber } from "../datos/util";

export default function Boleto({ invitado }) {
  const [confirmed, setConfirmed] = useState(false);
  const [assist, setAssist] = useState(false);

  function handleConfirm(e) {
    e.preventDefault();

    const name = e.target.id;

    setConfirmed(true);
    if (name === "bYes") {
      setAssist(true);
    } else if (name === "bNo") {
      setAssist(false);
    }
  }

  function handleChange(e) {
    e.preventDefault();

    setConfirmed(false);
  }

  const getInvitadosNumberMemo = useMemo(() => {
    return getInvitadosNumber(invitado);
  }, [invitado]);

  const namesOfNumber = useMemo(() => {
    return () => {
      if (invitado?.invitados) {
        const response = [
          invitado?.nickname,
          invitado.invitados.map((item) => item.nombre),
        ].join(",");
        const index = response.lastIndexOf(",");
        const x = response.split("");
        x[index] = " y ";

        return x.join("");
      } else {
        return invitado?.ninos && invitado.ninos > 0
          ? `${invitado.ninos} niño`
          : "";
      }
    };
  }, [invitado]);
  return (
    <>
      <div className="ticketContainer my-5">
        <div className="ticketDate">Sabado 04 de noviembre de 2023</div>
        <div className="ticketContent">
          <div className="ticketInfo">
            <div>Lena & Marcos</div>
            <div>Finca San Pedro</div>
            <div>Bugambilias 2 Fracc, Brisas, 62584 Temixco, Morelos</div>
            <div>14:00 hrs</div>
          </div>
          <div className="ticketRSVP">
            <p class="text-center titleticket">
              ¡Gracias, {invitado ? invitado.nickname : ""}!
            </p>
            <h3 className="center">RSVP</h3>
            <p>Por favor responde antes del 20 de agosto de 2023</p>
            <form>
              <div>
                <div className="ticketsNameOrNumber">{namesOfNumber()}</div>
                <div className="ticketsNumbe text-center">
                  {invitado?.boletos} Adultos, {invitado?.ninos} niños
                </div>
              </div>
              <div className="d-grid gap-2 mt-4">
                {confirmed ? (
                  assist ? (
                    <div>Te vemos pronto</div>
                  ) : (
                    <div>
                      No va a ser posible acompañarnos <br />
                      ¿Cambiaste de opinión?
                    </div>
                  )
                ) : (
                  <>
                    <button
                      id="bYes"
                      className="ticketButton btn btn-outline-success text-center"
                      onClick={handleConfirm}
                    >
                      Confirmar elección
                    </button>
                    <button
                      id="bNo"
                      className="ticketButton btn btn-outline-secondary"
                      onClick={handleConfirm}
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
                    onClick={handleChange}
                  >
                    Cambiar mi elección
                  </button>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>

      <div className="fakeTickets"></div>
    </>
  );
}
