import { useEffect, useRef } from "react";

export default function Photo({ photo }) {
  return (
    <div className="photo">
      <div>
        <img src={photo.url} width="200" loading="lazy" />
      </div>
      <div className="desc">Compartida por {photo.submitedBy}</div>
    </div>
  );
}

export function PhotoGallery({ photo }) {
  const ref = useRef(null);
  const refContainer = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("load", () => {
        refContainer.current.style.opacity = 1;
      });
    }
  }, []);

  return (
    <div className="photoGallery" ref={refContainer}>
      <div className="photoContainer">
        <img src={photo.url} width="200" ref={ref} />
      </div>
      <div className="photoDescription">Compartida por {photo.submitedBy}</div>
    </div>
  );
}
