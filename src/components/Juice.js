import PropTypes from 'prop-types';
import '../styles/juices.css';

const Juice = props => {
  const { juice, updateShopping } = props;
  return (
    <div className="row m-2 mb-4">
      <div className="col-3 text-center">
        <svg
          className="juice_tag"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100;"
        >
          <g>
            <polygon
              fill="#FFFFFF"
              points="97,50.88 88.9,58.6 93.44,68.83 82.99,72.84 83.27,84.03 72.08,83.76 68.06,94.2 57.84,89.66
            50.12,97.76 42.4,89.66 32.17,94.2 28.16,83.75 16.97,84.03 17.25,72.84 6.8,68.83 11.34,58.6 3.24,50.88 11.34,43.16 6.8,32.93
            17.25,28.92 16.97,17.73 28.16,18 32.17,7.56 42.4,12.1 50.12,4 57.84,12.1 68.06,7.56 72.08,18.01 83.27,17.73 82.99,28.92
            93.44,32.94 88.9,43.16"
            />
            <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fill="black" stroke="none" className="price_text">
              $
              {juice.precio}
            </text>
          </g>
        </svg>
      </div>
      <div className="col-7 m-0 p-0">
        <div>
          <p className="juice" style={{ color: `${juice.color}` }}>{juice.name}</p>
          <p className="sunglory">{juice.description}</p>
        </div>
      </div>
      <div className="col-2 d-flex justify-content-center align-items-center">
        <button type="submit" onClick={() => { updateShopping(juice); }}>+</button>
      </div>
    </div>
  );
};

Juice.propTypes = {
  juice: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    name: PropTypes.string,
    precio: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
  updateShopping: PropTypes.func.isRequired,
};

export default Juice;
