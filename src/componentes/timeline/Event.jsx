import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

function Event({ imagen, titulo, time }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const callbackFunc = (entries) => {
    entries.forEach((entry) => {
      setShow(entry.isIntersecting);
      if (entry.isIntersecting) {
        console.log("Elemento", titulo);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);
  return (
    <div
      className={classNames(
        "eventContainer",
        "txtText",
        show ? "show" : "hidden"
      )}
      ref={ref}
    >
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
