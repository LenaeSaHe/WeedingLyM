import { useEffect } from "react";
import { useState } from "react";
import { useAppContext } from "../../datos/store";
import monogramaticket from "../../img/logoml-full.png";
import TicketBack from "./ticketBack";
import TicketRSVP from "./ticketRSVP";

export default function TicketContent({ id }) {
  const [confirmed, setConfirmed] = useState(false);
  const [assist, setAssist] = useState(false);
  const [changeTickets, setChangeTickets] = useState(false);

  const store = useAppContext();

  useEffect(() => {
    if (store.invitado?.confirmacion !== undefined) {
      setConfirmed(true);
      setAssist(store.invitado.confirmacion);
      console.log("Confirmacion", store.invitado.confirmacion);
    }
  }, [store.invitado]);

  function handleConfirm(e) {
    e.preventDefault();

    const name = e.target.id;

    if (name === "bChange") {
      //cambiar  el numero de tickets
      setChangeTickets(true);
    } else {
      //cambianos a que ya se confirmo
      //una opcion, que va a asistir o no
      setConfirmed(true);
      if (name === "bYes") {
        //si va a asistir
        setAssist(true);
        store.saveInvitado(
          id,
          store.invitado?.nombre,
          true,
          store.invitado?.boletos,
          store.invitado?.ninos
        );
      } else if (name === "bNo") {
        //no va a asistir
        setAssist(false);
        store.saveInvitado(
          id,
          store.invitado?.nombre,
          false,
          0,
          store.invitado?.ninos
        );
      }
    }
  }

  function handleChange(e) {
    e.preventDefault();
    if (!assist) {
      setChangeTickets(true);
    } else {
      setChangeTickets(false);
    }
    setConfirmed(false);
  }

  function handleCancelChangeTickets(e) {
    e.preventDefault();

    setChangeTickets(false);
  }

  function handleConfirmTickets(ticketsUpdated) {
    setChangeTickets(false);

    setConfirmed(true);
    setAssist(true);

    store.saveInvitado(
      id,
      store.invitado?.nombre,
      true,
      ticketsUpdated,
      store.invitado?.ninos
    );
  }

  function handleChangeTickets(ticketsUpdated) {
    setConfirmed(true);
    setAssist(true);

    store.saveInvitado(
      id,
      store.invitado?.nombre,
      true,
      ticketsUpdated,
      store.invitado?.ninos
    );
  }
  return (
    <div className="ticketContent">
      <div className="ticketInfo">
        <img src={monogramaticket} height="220" />
        <div>Finca San Pedro</div>
        <div>Bugambilias 2 Fracc, Brisas, 62584 Temixco, Morelos</div>
        <div>14:00 hrs</div>
      </div>
      {changeTickets ? (
        <TicketBack
          onCancel={handleCancelChangeTickets}
          invitado={store.invitado}
          onChangeTickets={handleChangeTickets}
          onConfirm={handleConfirmTickets}
        />
      ) : (
        <TicketRSVP
          invitado={store.invitado}
          confirmed={confirmed}
          assist={assist}
          onConfirm={handleConfirm}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
