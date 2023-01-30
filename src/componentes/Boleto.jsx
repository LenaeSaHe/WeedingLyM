import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { consInvitado, sumaInvitado } from "../datos/firebase";
import { getInvitadosNumber } from "../datos/util";
import monogramaticket from "../img/monolymticket1.png";
import Transition from "./common/Transition";

export default function Boleto({ invitado,id }) 
{
  const [confirmed, setConfirmed] = useState(false);
  const [assist, setAssist] = useState(false);

  useEffect(()=>{
    consInvitado(id).then(dato =>{
      if(dato){
        setConfirmed(true);
        setAssist(dato.confirmacion)
      }

    });
  },[])

  function handleConfirm(e) {
    e.preventDefault();
  
    const name = e.target.id;

    setConfirmed(true);
    if (name === "bYes") {
      setAssist(true);
      sumaInvitado(id,invitado.nombre,true,invitado.boletos, invitado.ninos);
    } else if (name === "bNo") {
      setAssist(false);
      sumaInvitado(id,invitado.nombre,false,0, 0);
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
    <Transition initialClassName={""} finalClassName="ticketTransition">
      <div className="ticketContainer my-5">
        <div className="ticketDate">Sabado 04 de noviembre de 2023</div>
        <div className="ticketContent">
          <div className="ticketInfo">
            <img src={monogramaticket} height="150" />
            <div className="txtTitles4">Lena & Marcos</div>
            <div>Finca San Pedro</div>
            <div>Bugambilias 2 Fracc, Brisas, 62584 Temixco, Morelos</div>
            <div>14:00 hrs</div>
          </div>
          <div className="ticketRSVP">
            <p className="text-center titleticket">
              ¡Gracias, {invitado ? invitado.nickname : ""}!
            </p>
            <h3 className="center">RSVP</h3>
            <p>Por favor responde antes del 20 de agosto de 2023</p>
            <form>
              <div>
                <div className="ticketsNumbe text-center">
                  {invitado?.boletos} Adultos, {invitado?.ninos} niño(s)
                </div>
              </div>
              <div className="d-grid gap-2 mt-4">
                {confirmed ? (
                  assist ? (
                    <div className="text-center" id="acceptmsg"><strong>Gracias por tu confirmación, nos vemos en la boda</strong></div>
                  ) : (
                    <div className="text-center" id="denymsg">
                      <strong>No va a ser posible acompañarnos <br />
                      ¿Cambiaste de opinión?</strong>
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
    </Transition>
  );
}
