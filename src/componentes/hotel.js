import coralhotel from "../img/hotelcoral.webp";
import villas from "../img/villashotel.jpg";

import airbnbLogo from "../img/airbnb-logo.png";
import airbnbA from "../img/airbnb1.webp";
import airbnbB from "../img/airbnb2.webp";


import OpcHotel from "./OpcHotel";
import OpcAirbnb from "./OpcAirbnb";

const hotel1    = "https://coralpagos.com.mx/ReservacionesCoralClubes/redirect/reservacion/1";
const hotel1Web = "https://club.coralcuernavaca.com.mx/";

const hotel2    = "https://www.hotellasbrisasdecuernavaca.com/page17.html";
const hotel2Web = "https://www.hotellasbrisasdecuernavaca.com/";

const airbnb1   = "https://www.airbnb.mx/rooms/45847721?check_in=2023-02-10&check_out=2023-02-12&guests=1&adults=1&s=67&unique_share_id=3981691f-9592-4609-9ac6-24275d0b457c";
const airbnb2   ="https://www.airbnb.mx/rooms/589994523759049454?check_in=2023-01-20&check_out=2023-01-22&guests=1&adults=1&s=67&unique_share_id=22a661b9-162b-4f78-be93-8829d2ca4fc2";

function Hotel()
{
    return     <section className="contA">
                    <div className="container">
                        <h1 className="text-center txtTitles">Sugerencias de hospedaje</h1>
                        <p className="txtParagraph center">Te sugerimos algunas estancias cerca de la finca, donde se llevará a cabo el evento del año</p>
                        <div className="row">
                            <OpcHotel titulo="Hotel Coral" image={coralhotel} linkweb={hotel1Web} link={hotel1}/>
                            <OpcHotel titulo="Villas Cuernavaca Hotel" image={villas} linkweb={hotel2Web} link={hotel2}/>

                            <OpcAirbnb titulo="Casa de descanso con alberca y cancha de frontón" image={airbnbA} linkweb={airbnb1} logo={airbnbLogo}/>
                            <OpcAirbnb titulo="Casita Rústica" image={airbnbB} linkweb={airbnb2} logo={airbnbLogo}/>
                        </div>
                    </div>
                </section>

}
export default Hotel;