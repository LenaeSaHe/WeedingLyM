import Slider from "@mui/material/Slider";
import { useCallback, useState } from "react";
const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
];
export default function TicketBack({ invitado, onCancel, onChangeTickets }) {
  const [tickets, setTickets] = useState(invitado?.boletos || 1);

  function handleConfirm(e) {
    e.preventDefault();
    onChangeTickets(tickets);
  }

  function handleChange(e) {
    const value = e.target.value;
    if (value !== invitado?.boletos) {
      onChangeTickets(value);
    }
  }

  return (
    <div className="ticketRSVP">
      <h3 className="center">Confirmar boletos</h3>
      <p className="text-center">Cuantos boletos vas a ocupar?</p>

      <div className="px-2 pt-2">
        <Slider
          aria-label="Always visible"
          value={invitado?.boletos || 1}
          onChange={handleChange}
          step={1}
          min={1}
          max={invitado?.maxBoletos || 1}
          marks={marks}
          valueLabelDisplay="on"
        />
      </div>
      <div className="d-grid gap-2">
        <button
          id="bYes"
          className="ticketButton btn btn-outline-success text-center"
          onClick={onCancel}
        >
          Regresar
        </button>
      </div>
    </div>
  );
}
