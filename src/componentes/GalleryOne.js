import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import foto1 from "../img/mainLyM4.jpg";
import OurPhoto from "./OurPhoto";

function GalleryOne() {
  return (
    <section className="contA" style={{ padding: "20px" }}>
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
