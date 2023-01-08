function Event({ imagen, titulo, time }) {
  return (
    <div className="eventContainer">
      <div className="icon">
        <img src={imagen} className="center" />
      </div>
      <div className="eventInfo">
        <h3>{titulo}</h3>
        <time>{time}</time>
      </div>
    </div>
  );
}
export default Event;
