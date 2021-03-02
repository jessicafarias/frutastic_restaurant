import toast1 from '../assets/toast1.png';
import toast2 from '../assets/toast2.png';
import '../styles/smoothies.css';

const SliderT = () => (
  <div className="max-200">
    <div className="bebidas slide">
      <div id="slide_in1" className="carousel slide center w-100 z-2" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#slide_in1" data-slide-to="0" className="active" />
          <li data-target="#slide_in1" data-slide-to="1" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={toast1} className="d-block w-100" alt="2585" />
          </div>
          <div className="carousel-item">
            <img src={toast2} className="d-block w-100" alt="smoothies" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#slide_in1" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#slide_in1" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>

        </a>
      </div>
    </div>
  </div>
);

export default SliderT;
