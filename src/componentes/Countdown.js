import { useState, useEffect } from "react";
function Countdown()
{
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(()=>
  {
    const DATE_TARGET = new Date("11/04/2023 03:00 PM");
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;
    function updateCountdown() 
    {
      const NOW = new Date();
      const DURATION = DATE_TARGET - NOW;
      const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
      const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
      const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
      const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
      setDays(REMAINING_DAYS);
      setHours(REMAINING_HOURS);
      setMinutes(REMAINING_MINUTES);
      setSeconds(REMAINING_SECONDS);
    }
    updateCountdown();
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);  
  },[])


    return <section className="contA">
            <div className="container">
              <div className="content row">
                <div className="col-12">
                  <p className="text-center txtTitles">Ya falta muy poco</p>
                </div>
                <div className="col-12">
                  <p className="text-center txtBadage">
                    Dias<span className="badge text-bg-secondary text-bg-light" id="days">{days}</span>
                    Horas<span className="badge text-bg-secondary text-bg-light" id="hours">{hours}</span>
                    Minutos<span className="badge text-bg-secondary text-bg-light" id="minutes">{minutes}</span>
                    Segundos<span className="badge text-bg-secondary text-bg-light" id="seconds">{seconds}</span>
                  </p>
                </div>
              </div>
            </div>
            </section>

  

}
export default Countdown;