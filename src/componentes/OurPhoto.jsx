import { useRef, useState, useEffect } from "react";
import classNames from "classnames";

let options = {
  root: null,
  rootMargin: "20px",
  threshold: 0.4,
};
const delayOptions = ["delay-01", "delay-02", "delay-03"];
export default function OurPhoto({ photo, delay }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const callbackFunc = (entries) => {
    entries.forEach((entry) => {
      setShow(entry.isIntersecting);
      if (entry.isIntersecting) {
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
    <img
      ref={ref}
      src={photo}
      className={classNames(
        "ourPhoto",
        show ? "showOurPhoto" : "",
        show ? delayOptions[delay - 1] : ""
      )}
    />
  );
}
