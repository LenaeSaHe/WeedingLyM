import Boletos from "./Boletos";

function Footer({ invitado }) {
  return (
    <section className="contA">
      <div className="col-12 bottom">
        <p className="text-center txtText">
          Por favor, confirmanos tu asistencia
        </p>
      </div>
      <Boletos invitado={invitado} />
      <div>
        También puedes confirmarnos tu asistencia al correo: <br />
        marcosrivasr@gmail.com <br />
        o al whatsapp <br />
        7221496010
      </div>
    </section>
  );
}
export default Footer;
