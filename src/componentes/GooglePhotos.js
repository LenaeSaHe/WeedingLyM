import { useRef, useState } from "react";
import { useEffect } from "react";
import { getPhotos, submitPhoto } from "../datos/firebase";
import Title from "./common/Title";
import camera from "../img/camera-2-32.ico";
import photo from "../img/photo.png";

function GooglePhotos({ invitado }) {
  const [photos, setPhotos] = useState([]);
  const ref = useRef();
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

  function handleChange(e) 
  {
    const fileName = invitado.nickname + "-" + crypto.randomUUID();
    console.log(e.target.files);
    submitPhoto(e.target.files[0], fileName);
  }
  function handleClick()
  {
    if(ref.current)
    {
      ref.current.click();
    }
  }
  return (
    <section className="contB">
      <div className="container">
        <div className="row content">
          <div className="col-12 back">
            <Title>Compartenos tus momentos</Title>
          </div>
          <div id="sharephotos">
              <button class="btn py-3" onClick={handleClick} id="btnCam"><img src={photo}/></button>
          </div>          
          <button class="btn btnGold py-2" onClick={handleClick} id="btnCam"><img src={camera}/>Inserta una foto</button> 
            <input type="file" onChange={handleChange} ref={ref}  id="hidebutton"/>
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
