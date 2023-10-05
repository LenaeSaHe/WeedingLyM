import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import ornament from "../../img/divider.png";

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

export default function Title({ children, white, separator = true }) {
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
      if (ref.current) {
        observer.unobserve(ref.current);
      }
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
          show ? "showTitle" : "",
          white ? "text-white" : "text-black"
        )}
      >
        <div>{children}</div>
        {separator ? <Separator /> : null}
      </h3>
    </>
  );
}
function Separator() {
  return (
    <div className="ornamentTitle">
      <img src={ornament} width="150" />
    </div>
  );
}
