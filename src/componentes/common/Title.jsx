import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import ornament from "../../img/ornamenta-titulo.gif";

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
    <>
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
        <div>{children}</div>
        <div className="ornamentTitle">
          <img src={ornament} width="300" />
        </div>
      </h3>
    </>
  );
}
