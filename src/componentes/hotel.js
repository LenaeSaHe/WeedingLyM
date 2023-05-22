import coralhotel from "../img/hotelcoral.webp";
import villas from "../img/villashotel.jpg";
import holidayinn from "../img/holidayinn.jpg";
import fiestaamericana from "../img/fiestaamericana.jpg";

import airbnbA from "../img/airbnb1.webp";
import airbnbB from "../img/airbnb2.webp";
import airbnbLogo from "../img/circleairbnb.png";

import OpcHotel from "./OpcHotel";
import OpcAirbnb from "./OpcAirbnb";
import Title from "./common/Title";
import Paragraph from "./common/Paragraph";

const hotel1 =
  "https://coralpagos.com.mx/ReservacionesCoralClubes/redirect/reservacion/1";
const hotel1Web = "https://club.coralcuernavaca.com.mx/";

const hotel2 = "https://www.hotellasbrisasdecuernavaca.com/page17.html";
const hotel2Web = "https://www.hotellasbrisasdecuernavaca.com/";

const hotel3 = "https://www.ihg.com/holidayinn/hotels/us/en/find-hotels/select-roomrate?fromRedirect=true&qSrt=sBR&glat=FREE_hpa_free_MX_desktop_CVJMX_mapresults_1_MXN_2023-03-23_default___FALSE_CSTNIGCOR&qSlH=CVJMX&qRms=1&qAdlt=2&qChld=0&qCiD=23&qCiMy=022023&qCoD=24&qCoMy=022023&qrtPt=1650.00&setPMCookies=true&qSlRc=CSTN&qRtP=IGCOR&qSHBrC=HI&qDest=Blvd.%20Gustavo%20Diaz%20Ordaz%20%2386,%20Cuernavaca,%20MOR,%20MX&cm_mmc=hpa_free_MX_desktop_CVJMX_mapresults_1_MXN_2023-03-23_default___FALSE_CSTNIGCOR&srb_u=1";
const hotel3Web="https://www.ihg.com/holidayinn/hotels/us/en/find-hotels/select-roomrate?fromRedirect=true&qSrt=sBR&glat=FREE_hpa_free_MX_desktop_CVJMX_mapresults_1_MXN_2023-03-23_default___FALSE_CSTNIGCOR&qSlH=CVJMX&qRms=1&qAdlt=2&qChld=0&qCiD=23&qCiMy=022023&qCoD=24&qCoMy=022023&qrtPt=1650.00&setPMCookies=true&qSlRc=CSTN&qRtP=IGCOR&qSHBrC=HI&qDest=Blvd.%20Gustavo%20Diaz%20Ordaz%20%2386,%20Cuernavaca,%20MOR,%20MX&cm_mmc=hpa_free_MX_desktop_CVJMX_mapresults_1_MXN_2023-03-23_default___FALSE_CSTNIGCOR&srb_u=1";

const hotel4 = "https://reservations.fiestamericana.com/97959?_ga=2.95200287.282289134.1679547872-1127338853.1679547872&adults=2&datein=11/03/2023&dateout=11/05/2023&languageid=2#/accommodation/room";
const hotel4web = "https://www.fiestamericana.com/hoteles-y-resorts/fiesta-americana-hacienda-san-antonio-el-puente-cuernavaca";

const airbnb1 =
  "https://www.airbnb.mx/rooms/45847721?check_in=2023-02-10&check_out=2023-02-12&guests=1&adults=1&s=67&unique_share_id=3981691f-9592-4609-9ac6-24275d0b457c";
const airbnb2 =
  "https://www.airbnb.mx/rooms/589994523759049454?check_in=2023-01-20&check_out=2023-01-22&guests=1&adults=1&s=67&unique_share_id=22a661b9-162b-4f78-be93-8829d2ca4fc2";

function Hotel() {
  return (
    <section className="contB">
      <div className="container">
        <Title>Sugerencias de hospedaje</Title>
        <Paragraph>
          Te sugerimos algunas estancias cerca de la finca, donde se llevará a
          cabo el evento del año
        </Paragraph>

        <div className="row">
          <OpcHotel
            titulo="Hotel Coral"
            image={coralhotel}
            linkweb={hotel1Web}
            link={hotel1}
          />
          <OpcHotel
            titulo="Villas Cuernavaca Hotel"
            image={villas}
            linkweb={hotel2Web}
            link={hotel2}
          />

          <OpcHotel
            titulo="Holiday Inn"
            image={holidayinn}
            linkweb={hotel3Web}
            link={hotel3}
          />
          
          <OpcAirbnb
            titulo="Casa de descanso con alberca y cancha de frontón"
            image={airbnbA}
            linkweb={airbnb1}
            logo={airbnbLogo}
          />
          <OpcAirbnb
            titulo="Casita Rústica"
            image={airbnbB}
            linkweb={airbnb2}
            logo={airbnbLogo}
          />

          <OpcHotel
            titulo="Fiesta Americana"
            image={fiestaamericana}
            linkweb={hotel4}
            link={hotel4web}
          />  

        </div>
      </div>
    </section>
  );
}
export default Hotel;
