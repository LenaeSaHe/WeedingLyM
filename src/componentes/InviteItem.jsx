import { useEffect, useRef } from "react";

export default function InviteItem({ invitado }) {
  const inputRef = useRef();

  function getUrl(id) {
    const fullUrl = new URL(window.location.href);
    const url = fullUrl.origin + "/" + id;
    return url;
  }

  function handleClick() {
    if (!inputRef.current) return;

    var copyText = inputRef.current;

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  }
  return (
    <div className="inviteItem">
      <p>{invitado.nombre} </p>
      <input
        ref={inputRef}
        type="text"
        value={getUrl(invitado.id)}
        style={{ width: "300px" }}
      />{" "}
      <button onClick={handleClick}>Copiar URL</button>
    </div>
  );
}
