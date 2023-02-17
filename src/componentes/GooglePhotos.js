import { uuidv4 } from "@firebase/util";
import { useState } from "react";
import { useEffect } from "react";
import { getPhotos, submitPhoto } from "../datos/firebase";
import googlephotosico from "../img/google1.png";

import Title from "./common/Title";

function GooglePhotos({ invitado }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    loadPhotos();
  }, []);

  async function loadPhotos() {
    const data = await getPhotos();
    if (data && data.length > 0) {
      console.log("datos de photos", data);
      setPhotos([...data]);
    }
  }

  function handleChange(e) {
    const fileName = invitado.nickname + "-" + crypto.randomUUID();
    console.log(e.target.files);
    submitPhoto(e.target.files[0], fileName);
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
            <input type="file" onChange={handleChange} />
          </div>

          <div>
            {photos.map((photo, index) => (
              <div key={index}>
                Subida por {photo.submitedBy}
                <img src={photo.url} width="200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default GooglePhotos;
