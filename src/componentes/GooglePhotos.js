import { uuidv4 } from "@firebase/util";
import { submitPhoto } from "../datos/firebase";
import googlephotosico from "../img/google1.png";

import Title from "./common/Title";



function GooglePhotos({
  invitado
}) 
{
  function handleChange(e)
  {
    const fileName = invitado.nickname+"-"+crypto.randomUUID();
    console.log(e.target.files);
    submitPhoto(e.target.files[0]);  
  }

  return (
    <section className="contB">
      <div className="container">
        <div className="row content">
          <div className="col-12 back">
            <Title>Compartenos tus momentos</Title>
            <p className="text-center">
              <a
                href="https://photos.app.goo.gl/xr62pLeJWLixkXhw7"
                target="_blank"
              >
                <img
                  className="googleImage"
                  src={googlephotosico}
                  width="400"
                />
              </a>
            </p>
          </div>
          <div className="col-12" id="instagram">
            <input type="file" onChange={handleChange}/>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GooglePhotos;
