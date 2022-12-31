import logo from "../img/mono.gif";
function Backdrop({ invitado }) {
  return (
    <div id="backdrop">
      <div>
        <span className="title fadeIn delay-5">
          ¡Hola, {invitado ? invitado.nombre.split(" ")[0] : ""}!
        </span>
      </div>
      <img src={logo} />
      <div className="message w-50 text-center fadeIn delay-5">
        Te invitamos a compartir este bello momento con nosotros
      </div>
    </div>
  );
}
export default Backdrop;
