import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../components/imagenes/slider1.jpg'
import slider2 from '../../components/imagenes/slider2.jpg'
import slider3 from '../../components/imagenes/slider3.jpg'
import '../style.css';

function IndividualIntervalsExample() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={slider2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={slider1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;