import Title from "./common/Title";
import Paragraph from "./common/Paragraph";
import { useAppContext } from "../datos/store";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function Giveaway() {
  const store = useAppContext();
  const { width, height } = useWindowSize();

  if (store.invitado?.regalo) {
    return (
      <section className="contA" id="thanksGift">
        <Confetti
          numberOfPieces={400}
          width={width}
          height={height}
          recycle={false}
        />
        <ThanksGift width={width} height={height} />
      </section>
    );
  }

  return (
    <section className="contA" id="idSecGive">
      <Confetti
        numberOfPieces={400}
        width={width}
        height={height}
        recycle={false}
      />
      <div className="giveLetterContainer liverpoolLetter">
        <div className="giveLetterContent">
          <div className="giveTitle">LIVERPOOL</div>
          <Paragraph>
            ¡ Valoramos mucho tu asistencia !<br />
          </Paragraph>
          <div className="giveGoContainer">
            <a
              href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51117720"
              target="_blank"
              className="link-secondary"
            >
              Ver articulos
            </a>
          </div>
        </div>
      </div>

      <div className="giveLetterContainer principalLetter">
        <div className="giveLetterContent">
          <div className="giveMainTitle">Mesa de Regalos</div>
          <Paragraph>
            ¡ Valoramos mucho tu asistencia !<br />
            Si deseas tener algún detalle con nosotros, te dejamos algunas
            sugerencias
            <div className="txtTitles">¡ Gracias !</div>
          </Paragraph>
        </div>
      </div>

      <div className="giveLetterContainer amazonLetter">
        <div className="giveLetterContent">
          <div className="giveTitle">AMAZON</div>
          <Paragraph>
            ¡ Valoramos mucho tu asistencia !<br />
          </Paragraph>
          <div className="giveGoContainer">
            <a
              href="https://www.amazon.com.mx/wedding/marcos-rivas-rojas-lena-elizabeth-sanchez-hernandez-morelos-november-2023/registry/34EZFKVSULGV7"
              target="_blank"
              className="link-secondary"
            >
              Ver articulos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThanksGift({ width, height }) {
  return (
    <div className="giveMainTitle">
      <Paragraph>
        ¡Muchas gracias por tu regalo! <br />
        🎁🎁🎁
      </Paragraph>
    </div>
  );
}
export default Giveaway;
