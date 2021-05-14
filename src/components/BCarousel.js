import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BCarousel = ({ ImagesList }) => (
  <div className="p-3">
    <Carousel fade>
      {ImagesList.map(image => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block w-100"
            src={image.src}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

BCarousel.propTypes = {
  ImagesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default BCarousel;
