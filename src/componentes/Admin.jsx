import { useEffect, useState } from "react";
import dataInvites from "../datos/dataInvitados.json";
import InviteItem from "./InviteItem";
import { getConfirmaciones } from "../datos/firebase";
import classNames from "classnames";

export default function Admin() {
  const [tab, setTab] = useState("invitaciones");
  const [confirmados, setConfirmados] = useState([]);
  const [sivan, setSivan] = useState([]);
  const [novan, setNovan] = useState([]);
  const [sivanBoletos, setSivanBoletos] = useState(0);
  const [novanBoletos, setNovanBoletos] = useState(0);
  const [search, setSearch] = useState("");
  const [invitados, setInvitados] = useState(dataInvites);
  const [invitadosMarcos, setInvitadosMarcos] = useState([]);
  const [invitadosLena, setInvitadosLena] = useState([]);

  useEffect(() => {
    document.querySelector("html").style.overflowY = "auto";
    document.querySelector("body").style.overflowY = "auto";

    getConfirmaciones().then((data) => {
      const si = data.filter((item) => item.confirmacion);
      const no = data.filter((item) => !item.confirmacion);
      const invitadosMarcos = si.filter((item) => {
        const invite = dataInvites.find((inv) => inv.nombre === item.nombre);
        if (invite) {
          return invite.de === "Marcos";
        }
      });
      const invitadosLena = si.filter((item) => {
        const invite = dataInvites.find((inv) => inv.nombre === item.nombre);
        if (invite) {
          return invite.de === "Lena";
        }
      });
      console.log(invitadosMarcos, invitadosLena);
      setInvitadosLena(invitadosLena);
      setInvitadosMarcos(invitadosMarcos);
      setSivan(si);
      setNovan(no);

      const siBoletosTotal = si.reduce((acc, item) => acc + item.boletos, 0);
      setSivanBoletos(siBoletosTotal);

      const noBoletosTotal = no.reduce((acc, item) => acc + item.boletos, 0);
      setNovanBoletos(noBoletosTotal);

      setConfirmados(data);
    });
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);

    if (search.length >= 2) {
      const inv = dataInvites.filter((invitado) => {
        return invitado.nombre
          .toLowerCase()
          .includes(search.toLocaleLowerCase());
      });

      setInvitados(inv);
    } else {
      setInvitados(dataInvites);
    }
  }

  return (
    <div>
      <h1 className="p-4">Admin</h1>
      <div className="px-4">
        <button onClick={() => setTab("invitaciones")}>Invitaciones</button>
        <button onClick={() => setTab("confirmaciones")}>Confirmaciones</button>
      </div>
      <div style={{ display: tab === "invitaciones" ? "block" : "none" }}>
        <div className="searchInviteContainer">
          <input
            type="text"
            placeholder="Buscar"
            className="searchInvite"
            value={search}
            onChange={handleChange}
          />
        </div>
        {invitados.map((invitado, index) => (
          <InviteItem invitado={invitado} key={index} />
        ))}
      </div>
      <div
        className="confirmations"
        style={{ display: tab === "confirmaciones" ? "block" : "none" }}
      >
        <div className="text-center">
          <h3>Si asistiran {sivanBoletos}</h3>
        </div>
        <ShowConfirmed confirmados={invitadosLena} side="Lena" />
        <ShowConfirmed confirmados={invitadosMarcos} side="Marcos" />
      </div>
    </div>
  );
}

function ShowConfirmed({ confirmados, side }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = confirmados.reduce((acc, item) => acc + item.boletos, 0);
    setTotal(total);
  }, [confirmados]);
  return (
    <div>
      <h3 className="text-center">
        {side} - {total} boletos
      </h3>
      {confirmados.map((confirmado, index) => (
        <div
          key={index}
          className={classNames(
            "confirmationItem",
            confirmado.confirmacion ? "confirmationSi" : "confirmationNo"
          )}
        >
          <div style={{ width: "250px" }}>{confirmado.nombre}</div>
          <div>{confirmado.confirmacion ? "SI ASISTIRA" : "NO ASISTIRA"}</div>
          <div>{confirmado.boletos} Boletos</div>
        </div>
      ))}
    </div>
  );
}
