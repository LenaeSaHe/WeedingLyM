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
        <div className="ticketDate">Sabado 04 de noviembre de 2023</div>
        <TicketContent id={id} />
      </div>
      <div className="text-center p-3">
          {         
          !!store.invitado?.ninos && <small>
          Niños menores de 7 años no cuentan como boleto. Solo niños entre 3 y 7
          años tendrán menu infantil</small>
          }      
      </div>
      <div className="text-center p-3">
        Si tienes dudas, por favor contactanos: 
          {         
          store.invitado?.de === "Lena" ? 
          <a href={phoneL} target="_blank"><img src={Whatsapp} width="32"/> Lena</a> : 
          <a href={phoneM} target="_blank"><img src={Whatsapp} width="32"/> Marcos</a> 
         
          }
      </div>
    </Transition>
  );
}
