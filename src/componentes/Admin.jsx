import { useEffect, useState } from "react";
import data from "../datos/dataInvitados.json";
import { useRef } from "react";
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
  const [invitados, setInvitados] = useState(data);

  useEffect(() => {
    document.querySelector("html").style.overflowY = "auto";
    document.querySelector("body").style.overflowY = "auto";

    getConfirmaciones().then((data) => {
      const si = data.filter((item) => item.confirmacion);
      const no = data.filter((item) => !item.confirmacion);
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
      const inv = data.filter((invitado) => {
        return invitado.nombre
          .toLowerCase()
          .includes(search.toLocaleLowerCase());
      });

      setInvitados(inv);
    } else {
      setInvitados(data);
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
        <div className="px-4">
          <p>Si asistiran {sivanBoletos}</p>
          <p>No asistiran {novanBoletos}</p>
        </div>
        {confirmados.map((confirmado, index) => (
          <div
            key={index}
            className={classNames(
              "confirmationItem",
              confirmado.confirmacion ? "confirmationSi" : "confirmationNo"
            )}
          >
            <div>{confirmado.nombre}</div>
            <div>{confirmado.confirmacion ? "SI ASISTIRA" : "NO ASISTIRA"}</div>
            <div>{confirmado.boletos} Boletos</div>
          </div>
        ))}
      </div>
    </div>
  );
}
