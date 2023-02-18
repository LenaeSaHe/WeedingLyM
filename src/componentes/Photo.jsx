export default function Photo({ photo }) {
  return (
    <div className="photo">
      <div>
        <img src={photo.url} width="200" />
      </div>
      <div className="desc">Subida por {photo.submitedBy}</div>
    </div>
  );
}
