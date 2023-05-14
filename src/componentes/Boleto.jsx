import Transition from "./common/Transition";
import TicketContent from "./ticket/ticketContent";
import { useAppContext } from "../datos/store";
import Whatsapp from "../img/whatsapp-48.ico";

let phoneL = "https://wa.me/5537309542?text=Hola Lena, tengo una duda";
let phoneM = "https://wa.me/7221496010?text=Hola Marcos, tengo una duda";

export default function Boleto({ id }) 
{
  const store = useAppContext();
  return (
    <Transition initialClassName={""} finalClassName="ticketTransition">
      <div className="ticketContainer my-5">
        <div className="ticketDate">Sábado 04 de noviembre de 2023</div>
        <TicketContent id={id} />
      </div>
      <div className="text-center p-3">
          {         
          !!store.invitado?.ninos && <small>
           Niñ@s a partir de 3 años tendrán menu infantil</small>
          }      
      </div>

      <div className="text-center p-3" id="questionWhatsApp">
      <a href={ store.invitado?.de === "Lena" ? phoneL : phoneM } target="_blank">
        <img src={Whatsapp} width="36" height="36" className="logoWhatsApp"/>
        <div className="txtSearch"> Tienes dudas, por favor, contacta a:&nbsp;
          {store.invitado?.de}
        </div>
      </a>
      </div>

    </Transition>
  );
}
