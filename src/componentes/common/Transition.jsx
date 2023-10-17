import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

export default function Transition({
  children,
  initialClassName,
  finalClassName,
}) {
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
    <div ref={ref}>
      <div
        className={classNames(
          "transition",
          show ? initialClassName : finalClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
