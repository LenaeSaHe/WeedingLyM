import gif404 from "../img/404.gif";
export default function ErrorPage() {
  return (
    <div className="errorPage">
      <div>
        <img src={gif404} />
      </div>
      <div className="title">OOPS!</div>
      <div className="description">
        Parece que te perdiste. <br />
        Si recibiste una invitacion para la boda, avísanos para compartírtela de
        nuevo <br />
      </div>
      <small>Lena y Marcos 2023</small>
    </div>
  );
}
