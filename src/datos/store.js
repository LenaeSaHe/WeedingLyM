import { createContext, useContext, useState } from "react";
import { consInvitado, sumaInvitado } from "./firebase";

const AppContext = createContext({
  invitado: null,
  loadInvitado: (id) => {},
  saveInvitado: (id, nom, confirmado, boletos, ninos) => {},
});

export default function InvitadoState({ children }) {
  const [invitado, setInvitado] = useState(null);

  async function loadInvitado(id, local) {
    const inv = await consInvitado(id);
    if (inv) {
      local.boletos = inv.boletos;
      local.confirmacion = inv.confirmacion;
      setInvitado({ ...local });
      return inv;
    } else {
      setInvitado({ ...local });
    }
    console.log("loadInvitado", "No se cargó nada");
    return null;
  }

  async function saveInvitado(id, nom, confirmacion, boletos, ninos) {
    await sumaInvitado(id, nom, confirmacion, boletos, ninos);
    const inv = { ...invitado };
    inv.confirmacion = confirmacion;
    inv.boletos = boletos;
    inv.ninos = ninos;

    setInvitado({ ...inv });
  }

  function updateInvitado(local) {
    const temp = { ...local };
    if (invitado) {
      temp.boletos = invitado.boletos;
      temp.ninos = invitado.ninos;
      setInvitado(temp);
    }
  }
  return (
    <AppContext.Provider
      value={{
        invitado,
        loadInvitado,
        saveInvitado,
        updateInvitado,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
