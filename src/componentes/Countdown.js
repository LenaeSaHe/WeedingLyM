import { useState, useEffect } from "react";
import CountdownNumber from "./CountdownNumber";
import ornament from "../img/divider.png";

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const DATE_TARGET = new Date("11/04/2023 02:00 PM");
    //const DATE_TARGET = new Date("10/31/2023 02:48 PM");
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
      {selectView(days, hours, minutes, seconds)}
    </section>
  );
}

function selectView(days, hours, minutes, seconds) {
  console.log(days, hours, minutes, seconds);
  if (hours <= -12) {
    return <PartyIsOver />;
  } else if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    return <WeddingStarted />;
  } else {
    return (
      <ShowCountdown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
}

function WeddingStarted() {
  return (
    <>
      {" "}
      <div className="sectionTitle text-center txtTitles showTitle text-black py-4">
        LA BODA HA COMENZADO!
        <div className="ornamentTitle">
          <img src={ornament} width="150" />
        </div>
      </div>
    </>
  );
}

function ShowCountdown({ days, hours, minutes, seconds }) {
  return (
    <>
      <div className="countdownTitle">CUENTA REGRESIVA PARA EL EVENTO</div>
      <div className="text-center">
        <CountdownNumber text="Días" value={days} />
        <CountdownNumber text="Horas" value={hours} />
        <CountdownNumber text="Minutos" value={minutes} />
        <CountdownNumber text="Segundos" value={seconds} />
      </div>
    </>
  );
}

function PartyIsOver() {
  return (
    <>
      {" "}
      <div className="sectionTitle text-center txtTitles showTitle text-black py-4">
        MUCHAS GRACIAS POR ACOMPAÑARNOS!
        <div className="ornamentTitle">
          <img src={ornament} width="150" />
        </div>
      </div>
    </>
  );
}
export default Countdown;
