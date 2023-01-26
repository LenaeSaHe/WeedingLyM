import { useRef, useState, useEffect } from "react";
import classNames from "classnames";

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

export default function Title({ children }) {
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
    <h3
      ref={ref}
      className={classNames(
        "sectionTitle",
        "card-title",
        "text-center",
        "txtTitles",
        show ? "showTitle" : ""
      )}
    >
      {children}
    </h3>
  );
}
