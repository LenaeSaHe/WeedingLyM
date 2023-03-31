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
  return (
    <div className="photoGallery">
      <div>
        <img src={photo.url} width="200" loading="lazy" />
      </div>
      <div className="desc">Compartida por {photo.submitedBy}</div>
    </div>
  );
}
