import { useState, useEffect } from "react";
import CountdownNumber from "./CountdownNumber";

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const DATE_TARGET = new Date("11/04/2023 03:00 PM");
    //const DATE_TARGET = new Date("09/25/2023 10:20 AM");
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
  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    return <WeddingStarted />;
  } else if (days === 0 && hours <= 14 && hours > 0) {
    return <IsToday />;
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
      <div className="countdownTitle">EL EVENTO HA COMENZADO</div>
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

function IsToday() {
  return (
    <>
      <div className="countdownTitle">HOY ES LA BODA 🥳</div>
    </>
  );
}
export default Countdown;
