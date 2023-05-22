import mainMyL from "../img/mainLyM.jpg";
import mainMyL2 from "../img/mainLyM2.jpg";
import mainMyL3 from "../img/mainLyM3.jpg";
import mainMyL4 from "../img/mainLyM4.jpg";
import logo from "../img/L&M.png";

import img01 from "../img/fotos/01.jpeg";
import img02 from "../img/fotos/02.jpeg";
import img03 from "../img/fotos/03.jpeg";
import img04 from "../img/fotos/04.jpeg";
import img05 from "../img/fotos/05.jpeg";
import img06 from "../img/fotos/06.jpeg";
import img07 from "../img/fotos/07.jpeg";
import img08 from "../img/fotos/08.jpeg";
import img09 from "../img/fotos/09.jpeg";
import img10 from "../img/fotos/10.jpeg";
import img11 from "../img/fotos/11.jpeg";
import img12 from "../img/fotos/12.jpeg";
import img13 from "../img/fotos/13.jpeg";
import img14 from "../img/fotos/14.jpeg";
import img15 from "../img/fotos/15.jpeg";
import img16 from "../img/fotos/16.jpeg";
import img17 from "../img/fotos/17.jpeg";
import img18 from "../img/fotos/18.jpg";

const list = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];
const copy = [...list];

export function getImages() {
  const slots = 5;
  const res = [];
  for (let i = 0; i < slots; i++) {
    const index = Math.floor(Math.random() * copy.length);
    console.log(index);
    res.push(copy[parseInt(index)]);
    copy.splice(index, 1);
  }
  return res;
}
const images = getImages();
console.log(images);
export { images };

export default [logo, mainMyL, mainMyL2, mainMyL3, mainMyL4];
