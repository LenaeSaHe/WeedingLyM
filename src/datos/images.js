import mainMyL from "../img/mainLyM.jpg";
import saveTheDate from "../img/savethedate2.jpg";
import jym from "../img/jym.png";
import aym01 from "../img/aym01.png";
import finca from "../img/finca.jpeg";
import logo from "../img/L&M.png";
import logolm01 from "../img/logoml-01.png";
import logolm02 from "../img/logoml-02.png";
import logolm03 from "../img/logoml-03.png";
import logolm04 from "../img/logoml-04.png";
import logolm05 from "../img/logoml-05.png";
import logolm06 from "../img/logoml-06.png";
import logolm07 from "../img/logoml-07.png";
import logolm08 from "../img/logoml-08.png";

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
import img19 from "../img/fotos/19.jpg";
import img21 from "../img/fotos/21.jpg";
import img22 from "../img/fotos/22.jpg";

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
  img19,
  img21,
  img22,
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
export { images };

export default [
  logolm01,
  logolm02,
  logolm03,
  logolm04,
  logolm05,
  logolm06,
  logolm07,
  logolm08,
  logo,
  mainMyL,
  saveTheDate,
  jym,
  aym01,
  finca,
  ...images,
];
