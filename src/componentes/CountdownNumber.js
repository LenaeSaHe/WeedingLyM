export default function CountdownNumber({ text, value }) {
  return (
    <div className="countdownNumber">
      <span className="countdownBadge">{value}</span>
      <span className="countdownText">{text}</span>
    </div>
  );
}
