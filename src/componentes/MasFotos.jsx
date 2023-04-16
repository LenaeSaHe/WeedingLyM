import { useState, useEffect } from "react";
import { getPhotos } from "../datos/firebase";
import Photo, { PhotoGallery } from "./Photo";
export default function MasFotos() {
  const [photos, setPhotos] = useState([]);
  const [photosCol01, setPhotosCol01] = useState([]);
  const [photosCol02, setPhotosCol02] = useState([]);
  const [photosCol03, setPhotosCol03] = useState([]);
  const [photosCol04, setPhotosCol04] = useState([]);
  useEffect(() => {
    document.querySelector("html").style.overflowY = "auto";
    document.querySelector("body").style.overflowY = "auto";
    loadPhotos();
  }, []);

  async function loadPhotos() {
    const data = await getPhotos();
    if (data && data.length > 0) {
      const col01 = [];
      const col02 = [];
      const col03 = [];
      const col04 = [];
      for (let i = 0; i < data.length; i++) {
        if (i % 4 === 0) {
          col01.push(data[i]);
        } else if (i % 4 === 1) {
          col02.push(data[i]);
        } else if (i % 4 === 2) {
          col03.push(data[i]);
          col04.push(data[i]);
        } else if (i % 4 === 3) {
        }
      }
      setPhotosCol01(col01);
      setPhotosCol02(col02);
      setPhotosCol03(col03);
      setPhotosCol04(col04);
      console.log("datos de photos", data);
      setPhotos([...data]);
    }
  }

  return (
    <div className="galleryContent">
      <div className="galleryColumn">
        {photosCol01.map((photo, index) => (
          <PhotoGallery photo={photo} key={index} />
        ))}
      </div>
      <div className="galleryColumn">
        {photosCol02.map((photo, index) => (
          <PhotoGallery photo={photo} key={index} />
        ))}
      </div>
      <div className="galleryColumn">
        {photosCol03.map((photo, index) => (
          <PhotoGallery photo={photo} key={index} />
        ))}
      </div>
      <div className="galleryColumn">
        {photosCol04.map((photo, index) => (
          <PhotoGallery photo={photo} key={index} />
        ))}
      </div>
    </div>
  );
}
