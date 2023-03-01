import { useRef, useState } from "react";
import { useEffect } from "react";
import { getPhotos, submitPhoto } from "../datos/firebase";
import Title from "./common/Title";
import camera from "../img/camera-2-32.ico";
import Photo from "./Photo";

const stages = {
  normal: "Sube tu foto",
  loading: "Subiendo foto...",
  succcess: "Foto guardada. Sube más fotos!",
  error: "Erro al guardar la foto, intenta más tarde",
};

function GooglePhotos({ invitado }) {
  const [photos, setPhotos] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(stages["normal"]);
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

  function handleChange(e) {
    setSubmitStatus(stages["loading"]);
    try {
      const fileName = invitado.nickname + "-" + crypto.randomUUID();
      console.log(e.target.files);
      submitPhoto(e.target.files[0], fileName)
        .then(() => {
          setSubmitStatus(stages["success"]);
          loadPhotos();
        })
        .error(() => {
          setSubmitStatus(stages["error"]);
        });
    } catch (error) {
      setSubmitStatus(stages["error"]);
    }
  }
  function handleClick() {
    if (ref.current) {
      ref.current.click();
    }
  }
  return (
    <section className="photosSection">
      <div className="photosContainer">
        <div className="photosWrapper">
            {photos.map((photo, index) => (
            <Photo photo={photo} key={index} />
          ))}
        </div>
      </div>
      <div className="formPhotos">
        <div className="">
          <Title white>Compartenos tus momentos</Title>
        </div>
        <div className="addphoto">
          <button className="btn btnGold py-2" onClick={handleClick} id="btnCam">
            <img src={camera} />{submitStatus}
         </button>
         </div>
        <input type="file" onChange={handleChange} ref={ref} id="hidebutton" />
      </div>
    </section>
  );
}
export default GooglePhotos;
