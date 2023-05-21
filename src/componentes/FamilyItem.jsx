import Title from "./common/Title";
import { useRef, useState, useEffect } from "react";
import classNames from "classnames";

let options = {
  root: null,
  rootMargin: "20px",
  threshold: 0.4,
};

export default function FamilyItem({ title, father, mother, stylePhoto }) {
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
    <div className="col-lg-6 col-sm-12 center pb-5" ref={ref}>
      <div className="row">
        <div className="col">
          <Title separator={false}>{title}</Title>
        </div>
      </div>

      <div className="row">
        <div
          className={classNames(
            "col",
            "center",
            "photofam",
            "famPhotos",
            stylePhoto,
            show ? "showFam" : ""
          )}
        ></div>
      </div>

      <div className="row">
        <div
          className={classNames(
            "col",
            "center",
            "famNames",
            show ? "showFam" : ""
          )}
        >
          {father}
          <br />
          {mother}
        </div>
      </div>
    </div>
  );
}
