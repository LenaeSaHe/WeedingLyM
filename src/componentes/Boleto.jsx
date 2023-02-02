import Transition from "./common/Transition";
import TicketContent from "./ticket/ticketContent";

export default function Boleto({ id }) {
  return (
    <Transition initialClassName={""} finalClassName="ticketTransition">
      <div className="ticketContainer my-5">
        <div className="ticketDate">Sabado 04 de noviembre de 2023</div>
        <TicketContent id={id} />
      </div>
      <div className="text-center">
        <small>
          Niños menores de 7 años no cuentan como boleto. Solo niños entre 3 y 7
          años tendrán menu infantil
        </small>
      </div>
    </Transition>
  );
}
