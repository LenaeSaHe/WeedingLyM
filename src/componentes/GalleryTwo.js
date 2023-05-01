import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import foto1 from "../img/mainLyM4.jpg";
import OurPhoto from "./OurPhoto";
import { images} from "../datos/images";

function GalleryTwo() {
  return (
    <section className="contA" style={{ padding: "20px" }}>
      <div className="row d-flex align-items-center justify-content-center galleryOneContainer">
        <div className="col-lg-6">
          <OurPhoto photo={images[3]} delay="1" />
        </div>
        <div className="col-lg-6">
          <OurPhoto photo={images[4]} delay="2" />
        </div>
      </div>
    </section>
  );
}
export default GalleryTwo;
