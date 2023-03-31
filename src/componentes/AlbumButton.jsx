export default function AlbumButton({ onClick, text, icon }) {
  return (
    <button className="btnAlbum" onClick={onClick}>
      <img src={icon} />
      {text}
    </button>
  );
}
