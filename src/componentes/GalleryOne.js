import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import foto1 from "../img/mainLyM4.jpg";
import OurPhoto from "./OurPhoto";

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

function GalleryOne() {
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
    <section className="contA" ref={ref}>
      <div className="row d-flex align-items-center justify-content-center galleryOneContainer">
        <div className="col-lg-4">
          <OurPhoto photo={foto1} delay="1" />
        </div>
        <div className="col-lg-4">
          <OurPhoto photo={foto1} delay="2" />
        </div>
        <div className="col-lg-4">
          <OurPhoto photo={foto1} delay="3" />
        </div>
      </div>
    </section>
  );
}
export default GalleryOne;
