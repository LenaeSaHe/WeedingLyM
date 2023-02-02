import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { consInvitado, sumaInvitado } from "../../datos/firebase";
import { useAppContext } from "../../datos/store";
import { getInvitadosNumber } from "../../datos/util";
import monogramaticket from "../../img/monolymticket1.png";
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
  }, [store]);

  function handleConfirm(e) {
    e.preventDefault();

    const name = e.target.id;

    if (name === "bChange") {
      setChangeTickets(true);
    } else {
      setConfirmed(true);
      if (name === "bYes") {
        setAssist(true);
        store.saveInvitado(
          id,
          store.invitado?.nombre,
          true,
          store.invitado?.boletos,
          store.invitado?.ninos
        );
      } else if (name === "bNo") {
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
        <img src={monogramaticket} height="150" />
        <div className="txtTitles4">Lena & Marcos</div>
        <div>Finca San Pedro</div>
        <div>Bugambilias 2 Fracc, Brisas, 62584 Temixco, Morelos</div>
        <div>14:00 hrs</div>
      </div>
      {changeTickets ? (
        <TicketBack
          onCancel={handleCancelChangeTickets}
          invitado={store.invitado}
          onChangeTickets={handleChangeTickets}
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
