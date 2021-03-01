import smoothie1 from '../assets/purpura.jpg';
import smoothie2 from '../assets/rubio.jpg';
import smoothie3 from '../assets/trebol3.jpg';
import '../styles/smoothies.css';
import smoothie4 from '../assets/flamingo.jpg';

const Slider = () => (
  <div className="max-200">
    <div className="bebidas slide">
      <div id="slide_in3" className="carousel slide center w-100 z-2" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#slide_in3" data-slide-to="0" className="active" />
          <li data-target="#slide_in3" data-slide-to="1" />
          <li data-target="#slide_in3" data-slide-to="2" />
          <li data-target="#slide_in3" data-slide-to="3" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={smoothie1} className="d-block w-100" alt="2585" />
          </div>
          <div className="carousel-item">
            <img src={smoothie4} className="d-block w-100" alt="smoothies" />
          </div>
          <div className="carousel-item">
            <img src={smoothie2} className="d-block w-100" alt="jugo anarajado" />
          </div>
          <div className="carousel-item">
            <img src={smoothie3} className="d-block w-100" alt="jugo energizante" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#slide_in3" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#slide_in3" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>

        </a>
      </div>
    </div>
  </div>
);

export default Slider;
