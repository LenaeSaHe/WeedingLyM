import Carousel from 'react-bootstrap/Carousel';
import mainMyL from '../img/mainLyM.jpg';
import mainMyL2 from '../img/mainLyM2.jpg';
import mainMyL3 from '../img/mainLyM3.jpg';
import mainMyL4 from '../img/mainLyM4.jpg';

function CarrouselHeader() {
  return (
    <Carousel>

      <Carousel.Item>
        <img className="d-block w-100" src={mainMyL} alt="First slide"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={mainMyL2} alt="First slide"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={mainMyL3} alt="First slide"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      
    <Carousel.Item>
      <img className="d-block w-100" src={mainMyL4} alt="First slide"/>
        <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>


    </Carousel>
  );
}

export default CarrouselHeader;