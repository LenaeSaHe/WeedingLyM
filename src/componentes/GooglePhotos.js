import { useRef, useState } from "react";
import { useEffect } from "react";
import { getPhotos, submitPhoto } from "../datos/firebase";
import Title from "./common/Title";
import camera from "../img/camera-2-32.ico";
import view from "../img/photo-32.ico";
import Photo from "./Photo";
import { Link } from "react-router-dom";
import Paragraph from "./common/Paragraph";
import AlbumButton from "./AlbumButton";

const stages = {
  normal: "Sube tus fotos",
  loading: "Subiendo fotos...",
  succcess: "Foto guardada. Sube más fotos!",
  error: "Erro al guardar la foto, intenta más tarde",
};

function GooglePhotos({ invitado }) {
  const [photos, setPhotos] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(stages.normal);
  const ref = useRef();
  useEffect(() => {
    loadPhotos();
  }, []);

  async function loadPhotos() {
    const data = await getPhotos();
    if (data && data.length > 0) {
      //console.log("datos de photos", data);
      setPhotos([...data]);
    }
  }

  async function handleChange(e) {
    setSubmitStatus(stages.loading);
    const fileName = invitado.nickname + "-" + crypto.randomUUID();
    const photos = e.target.files;

    try {
      await Promise.all(
        [...photos].map((photo) => submitPhoto(photo, fileName))
      );
      loadPhotos();
      setSubmitStatus(stages.succcess);
    } catch (error) {
      console.error(error);
      setSubmitStatus(stages.error);
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
        <div className="formPhotos">
          <div className="">
            <Title white>Compartenos tus momentos con nosotros</Title>
            <div className="formPhotosDescription">
              <Paragraph>
                Nos encantaria que pudieras compartirnos las fotos que tomaste
                con nosotros
              </Paragraph>
            </div>
          </div>
          <div className="addphoto">
            <AlbumButton
              onClick={handleClick}
              icon={camera}
              text={submitStatus}
            />
            <Link
              to="/masFotos"
              target="_blank"
              className="btnAlbum"
              id="btnCam"
            >
              <img src={view} />
              Ver todas las fotos
            </Link>
          </div>
          <input
            type="file"
            onChange={handleChange}
            ref={ref}
            id="hidebutton"
            multiple
            accept="image/*"
          />
        </div>
      </div>
    </section>
  );
}
export default GooglePhotos;
