import PropTypes from 'prop-types';
import '../styles/smoothies.css';

const Smoothie = props => {
  const { smoothie } = props;
  return (
    <div className="row justify-content-center align-items-center mr-2 ml-2">
      <div className="col-3">
        <div className="d-flex flex-column">
          <div className="img_container">
            <svg
              className="smoothie"
              version="1.1"
              id="smoothie"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 32 67"
              enableBackground="new 0 0 32 67;"
            >
              <g id="blanco">
                <path
                  className="st0"
                  d="M10.43,18.44c-1.96,1.37-3.2,3.72-3.71,6.01c-0.09,0.41,0.54,0.58,0.63,0.17c0.46-2.11,1.59-4.34,3.41-5.62
                    C11.1,18.76,10.78,18.19,10.43,18.44L10.43,18.44z"
                />
                <path
                  className="st0"
                  d="M2.56,30.78C3.67,42.5,4.78,54.21,5.9,65.93c0.02,0.23,0.18,0.43,0.43,0.43c6.42,0,12.84,0,19.26,0
                    c0.25,0,0.41-0.2,0.43-0.43c1.11-11.72,2.23-23.43,3.34-35.15c0.02-0.24-0.21-0.43-0.43-0.43c-8.65,0-17.3,0-25.95,0
                    c-0.56,0-0.56,0.86,0,0.86c8.65,0,17.3,0,25.95,0c-0.14-0.14-0.29-0.29-0.43-0.43c-1.11,11.72-2.23,23.43-3.34,35.15
                    c0.14-0.15,0.29-0.29,0.43-0.43c-6.42,0-12.84,0-19.26,0c0.14,0.14,0.29,0.29,0.43,0.43C5.65,54.21,4.53,42.5,3.42,30.78
                    C3.37,30.23,2.5,30.22,2.56,30.78z"
                />
                <path
                  className="st0"
                  d="M11.5,20.4c-1.13,0.91-2.08,2.22-2.43,3.64c-0.1,0.41,0.53,0.58,0.63,0.17c0.32-1.32,1.21-2.5,2.26-3.35
                    C12.28,20.59,11.82,20.14,11.5,20.4L11.5,20.4z"
                />
                <path
                  className="st0"
                  d="M13.93,2.36c-0.29,6.67-0.58,13.33-0.87,20c-0.11,2.61-0.23,5.21-0.34,7.82c-0.06,1.39,4.14,1.13,4.73-0.06
                    c0.27-0.55,0.07-1.34,0.09-1.89c0.38-8.68,0.76-17.37,1.14-26.05c0.01-0.16-0.23-0.24-0.45-0.24c-1.29,0.04-2.59,0.08-3.88,0.12
                    c-0.55,0.02-0.51,0.56,0.04,0.54c1.3-0.04,2.59-0.08,3.88-0.12c-0.15-0.08-0.3-0.16-0.45-0.24c-0.29,6.66-0.58,13.33-0.87,19.99
                    c-0.11,2.61-0.23,5.22-0.34,7.82c-0.03,0.64-3.05,0.73-3.02-0.11c0.02-0.4,0.03-0.8,0.05-1.2c0.07-1.52,0.13-3.04,0.2-4.56
                    c0.32-7.3,0.64-14.6,0.96-21.9C14.81,1.94,13.95,2.01,13.93,2.36z"
                />
                <path
                  className="st0"
                  d="M2.81,31.21c8.2,0,16.4,0,24.6,0c1.5,0,3.7,0.15,3.87-1.92c0.12-1.47-0.73-2.45-2.17-2.6
                    c-3.87-0.38-7.98,0-11.87,0c-4.24,0-8.48,0-12.72,0c-1.5,0-3.7-0.15-3.87,1.92C0.52,30.08,1.37,31.07,2.81,31.21
                    c0.56,0.05,0.55-0.81,0-0.86c-1.77-0.18-1.77-2.61,0-2.79c1.11-0.11,2.28,0,3.39,0c2.54,0,5.09,0,7.63,0c5.09,0,10.18,0,15.27,0
                    c1.83,0,1.71,2.62,0,2.79c-1.11,0.11-2.28,0-3.39,0c-2.54,0-5.09,0-7.63,0c-5.09,0-10.18,0-15.27,0
                    C2.26,30.35,2.26,31.21,2.81,31.21z"
                />
                <path
                  className="st0"
                  d="M6.53,33.14C7.1,40.2,7.67,47.26,8.25,54.33c0.03,0.41,0.68,0.42,0.65,0C8.32,47.26,7.75,40.2,7.18,33.14
                    C7.15,32.72,6.5,32.72,6.53,33.14L6.53,33.14z"
                />
                <path
                  className="st0"
                  d="M9.38,37.63c0.57,7.06,1.14,14.13,1.72,21.19c0.03,0.41,0.68,0.42,0.65,0c-0.57-7.06-1.14-14.13-1.72-21.19
                    C10,37.21,9.35,37.21,9.38,37.63L9.38,37.63z"
                />
                <path
                  className="st0"
                  d="M19.79,14.96c-1.36,0-2.73,0-4.09,0c-1.39,0-3.01-0.26-4.34,0.22c-5.01,1.79-8.11,6.76-8.24,11.95
                    c-0.01,0.23,0.2,0.43,0.43,0.43c8.24,0,16.48,0,24.72,0c0.23,0,0.44-0.2,0.43-0.43c-0.14-5.59-3.54-10.27-8.8-12.15
                    c-0.52-0.19-0.75,0.65-0.23,0.83c4.9,1.75,8.04,6.13,8.17,11.32c0.14-0.14,0.29-0.29,0.43-0.43c-8.24,0-16.48,0-24.72,0
                    c0.14,0.14,0.29,0.29,0.43,0.43c0.07-2.61,0.84-4.95,2.34-7.09c1.13-1.62,3.85-4.21,5.98-4.21c2.5,0,4.99,0,7.49,0
                    C20.35,15.83,20.35,14.96,19.79,14.96z"
                />
              </g>
              <path
                id="color"
                fill={smoothie.color}
                d="M26.09,37.12c0.42-0.44,0.82-0.9,1.19-1.37c0.94-1.23,0.47-2.35-0.64-2.29
                  c0.08-0.48-0.15-0.85-0.98-0.93c-0.31-0.03-0.65,0.02-0.99,0.12c-0.17-0.34-0.6-0.45-1.46-0.05c-0.49,0.22-0.97,0.49-1.44,0.78
                  c0.55-0.84,0.64-1.49-0.5-1.38c-0.71,0.07-1.38,0.46-2,0.89c0.68-2.35-2.09-1.05-3.76-0.07c0.01-0.07,0.03-0.14,0.04-0.21
                  c0.2-1.97-2.37-0.58-3.31,0.03c-0.11-0.87-1.61-0.52-2.67-0.12c0.02-0.57-0.56-1.14-1.16-0.73c-1.47,1-2.99,2.08-4.12,3.47
                  c-0.46,0.57-0.81,2.01,0.06,2.32c-0.29,0.38-0.45,0.81-0.33,1.25c0.14,0.52,0.47,0.74,0.85,0.81c-0.43,0.59-0.64,1.17-0.49,1.7
                  c0.21,0.76,0.82,0.84,1.59,0.57c-0.17,0.2-0.34,0.4-0.5,0.61c-0.45,0.59-0.24,1.48,0.51,1.66c0.39,0.09,0.82-0.02,1.25-0.23
                  C6.21,45,5.52,46.04,5.76,46.84c0.14,0.45,0.4,0.64,0.74,0.68C5.97,48,5.39,48.6,5.39,49.22c0,0.39,0.18,0.66,0.44,0.81
                  c-0.51,0.83-0.91,1.8-0.43,2.2C5.22,52.61,5.14,53,5.21,53.36c0.2,0.92,0.99,0.83,1.9,0.36c-0.21,0.43-0.21,0.83,0.16,1.16
                  c-0.18,0.32-0.3,0.63-0.35,0.95c-0.04,0.28-0.04,0.5,0,0.68c-1.16,1.21-0.48,2.04,0.61,2.16c-0.31,0.31-0.55,0.64-0.6,0.99
                  c-0.06,0.47,0.08,0.86,0.37,1.09c-0.53,0.72-0.65,1.47,0.24,2.05c-0.8,1.04-1.12,2.3,0.95,1.89c0.68-0.14,1.35-0.44,2.01-0.8
                  c-0.17,1.16,1.89,0.67,2.53,0.37c0.39-0.18,0.77-0.38,1.15-0.58c0.63,1.51,3.33-0.51,4.02-0.93c0,0,0.01,0,0.01-0.01
                  c-0.75,0.82-1.12,1.88,0.46,2.21c0.94,0.2,2.04-0.49,2.83-0.9c0.13-0.07,0.27-0.15,0.4-0.22c-0.08,0.59,0.76,1.19,1.39,0.68
                  c0.7-0.56,2.53-2.16,1.58-3.21c-0.24-0.27-0.56-0.34-0.91-0.31c0.62-0.62,0.92-1.43,0.27-2.25c-0.04-0.05-0.09-0.09-0.13-0.13
                  c0.38-0.33,0.68-0.68,0.82-1.08c0.34-0.99-0.09-1.27-0.85-1.16c0.43-0.38,0.83-0.77,1.2-1.19c0.47-0.53,0.58-1.51-0.25-1.77
                  c-0.15-0.05-0.31-0.05-0.46-0.05c0.15-0.45-0.02-0.84-0.36-1.07c1.21-0.86,2.09-1.83,1.55-2.64c-0.08-0.12-0.17-0.21-0.27-0.29
                  c0.56-0.55,0.92-1.12,0.93-1.67c0.02-0.98-0.62-1.13-1.46-0.92c0.24-0.22,0.49-0.44,0.71-0.67c0.48-0.51,0.7-1.37,0.02-1.82
                  c-0.2-0.13-0.42-0.19-0.65-0.19c0.57-0.46,1.13-1,1.29-1.67c0.16-0.68-0.32-1.14-0.91-1.25c0.73-0.76,1.34-1.56,1.75-2.42
                  C27.8,37.38,27.07,37.05,26.09,37.12z M8.77,61.67c-0.12-0.03-0.12-0.14,0.14-0.39c0.34-0.35,0.71-0.67,1.09-0.99
                  c0.64-0.36,1.26-0.8,1.82-1.16c0.64-0.41,1.28-0.84,1.91-1.28c1.64-0.9,3.35-1.7,4.95-2.5c-0.62,0.5-1.24,1-1.86,1.49
                  C14.1,58.41,11.36,59.92,8.77,61.67z M14.75,53.08c0.27-0.16,0.54-0.32,0.81-0.48c-0.54,0.37-1.08,0.73-1.63,1.09
                  C14.2,53.49,14.48,53.29,14.75,53.08z M24.74,39.33c-0.72,0.76-1.52,1.45-2.32,2.14c-2.75,2.37-5.65,4.57-8.55,6.75
                  c2.59-2.31,5.15-4.66,7.84-6.87c1.04-0.85,2.22-1.92,3.5-2.54C25.05,38.99,24.89,39.16,24.74,39.33z"
              />
            </svg>

            <div className="price">
              <svg
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
                  <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fill="black" stroke="none" className="price_text">{smoothie.precio}</text>
                </g>

              </svg>
            </div>
          </div>
          <div>
            <p className="smoothie_name">{smoothie.nombre}</p>
          </div>
        </div>
        <div />
      </div>
      <div className="col-7 p-0">
        <div className="">
          <p className="sunglory h-100">{smoothie.description}</p>
        </div>
      </div>
      <div className="col-2 d-flex justify-content-center align-items-center">
        <button type="submit">Add</button>
      </div>
    </div>
  );
};
Smoothie.propTypes = {
  smoothie: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    color: PropTypes.string,
    nombre: PropTypes.string,
    precio: PropTypes.number,
  }).isRequired,
};
export default Smoothie;
