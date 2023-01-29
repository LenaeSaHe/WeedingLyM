import { useState, useEffect } from "react";
import CountdownNumber from "./CountdownNumber";
import mainYard from "../img/fondo-salon.png";
import Title from "./common/Title";

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const DATE_TARGET = new Date("11/04/2023 03:00 PM");
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;
    function updateCountdown() {
      const NOW = new Date();
      const DURATION = DATE_TARGET - NOW;
      const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
      const REMAINING_HOURS = Math.floor(
        (DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR
      );
      const REMAINING_MINUTES = Math.floor(
        (DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE
      );
      const REMAINING_SECONDS = Math.floor(
        (DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND
      );
      setDays(REMAINING_DAYS);
      setHours(REMAINING_HOURS);
      setMinutes(REMAINING_MINUTES);
      setSeconds(REMAINING_SECONDS);
    }
    updateCountdown();
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
  }, []);

  return (
    <section className="contA" id="countdown">
      <div className="container">
        <div className="content row">
          <div className="col-12">
            <Title>Ya falta muy poco</Title>
          </div>
          <div className="col-12">
            <div className="text-center">
              <CountdownNumber text="Días" value={days} />
              <CountdownNumber text="Horas" value={hours} />
              <CountdownNumber text="Minutos" value={minutes} />
              <CountdownNumber text="Segundos" value={seconds} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Countdown;
