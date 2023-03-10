import { useState, useEffect } from "react";
import { getPhotos } from "../datos/firebase";
import Photo, { PhotoGallery } from "./Photo";
export default function MasFotos()
{
    const [photos, setPhotos] = useState([]);
    useEffect(() => 
    {
      loadPhotos();
    }, []);
  
    async function loadPhotos() {
      const data = await getPhotos();
      if (data && data.length > 0) {
        console.log("datos de photos", data);
        setPhotos([...data]);
      }
    }
  
    return  <div className="galleryContent">
                {photos.map((photo, index) => (
                <PhotoGallery photo={photo} key={index} />
                ))}
            </div>
}