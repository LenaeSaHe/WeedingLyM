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

  useEffect(() => {
    document.querySelector("html").style.overflowY = "auto";
    document.querySelector("body").style.overflowY = "auto";
    console.log("Admin");

    getConfirmaciones().then((data) => {
      const si = data.filter((item) => item.confirmacion);
      const no = data.filter((item) => !item.confirmacion);
      setSivan(si);
      setNovan(no);
      setConfirmados(data);
    });
  }, []);

  return (
    <div>
      <h1 className="p-4">Admin</h1>
      <div className="px-4">
        <button onClick={() => setTab("invitaciones")}>Invitaciones</button>
        <button onClick={() => setTab("confirmaciones")}>Confirmaciones</button>
      </div>
      <div style={{ display: tab === "invitaciones" ? "block" : "none" }}>
        {data.map((invitado, index) => (
          <InviteItem invitado={invitado} key={index} />
        ))}
      </div>
      <div
        className="confirmations"
        style={{ display: tab === "confirmaciones" ? "block" : "none" }}
      >
        <div className="px-4">
          <p>Si asistiran {sivan.length}</p>
          <p>No asistiran {novan.length}</p>
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
