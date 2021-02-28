import PropTypes from 'prop-types';
import '../styles/daiquiri.css';

const Daiquiri = props => {
  const { daiquiri } = props;
  return (
    <div className="col-6">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 224 213"
        enableBackground="new 0 0 224 213;"
      >
        <text transform="matrix(1 0 0 1 43.5959 210.3093)" className="st0 st1 st2">{daiquiri.name}</text>
        <path
          className="st0"
          d="M100.79,22.82c-1.63,21.02-3.27,42.04-4.9,63.06c-0.64,8.23-1.28,16.44-1.92,24.67
          c-0.34,4.38,8.08,4.61,9.45,1.01c0.63-1.66,0.34-4.23,0.48-5.97c2.13-27.39,4.26-54.77,6.38-82.16c0.04-0.5-0.42-0.83-0.86-0.86
          c-2.59-0.2-5.17-0.4-7.76-0.61c-1.11-0.09-1.11,1.64,0,1.73c2.59,0.2,5.17,0.4,7.76,0.61c-0.29-0.29-0.57-0.58-0.86-0.86
          c-1.63,21.02-3.27,42.04-4.9,63.05c-0.64,8.22-1.28,16.44-1.92,24.67c-0.16,2-6.2,1.53-6-1.12c0.1-1.26,0.2-2.51,0.29-3.77
          c0.37-4.8,0.75-9.59,1.12-14.39c1.79-23.02,3.58-46.04,5.37-69.06C102.61,21.71,100.88,21.72,100.79,22.82z"
        />
        <path
          className="st0"
          d="M102.43,173.38c-47.51,0-86.15-38.65-86.15-86.15c0-47.5,38.65-86.15,86.15-86.15
          c47.5,0,86.15,38.65,86.15,86.15C188.59,134.74,149.94,173.38,102.43,173.38z M102.43,3.67c-46.08,0-83.56,37.49-83.56,83.56
          c0,46.08,37.49,83.56,83.56,83.56c46.07,0,83.56-37.48,83.56-83.56C185.99,41.16,148.51,3.67,102.43,3.67z"
        />
        <path
          className="st0"
          d="M76.14,82.2c16.4,0,32.8,0,49.2,0c3,0,7.4,0.3,7.73-3.83c0.24-2.93-1.45-4.91-4.34-5.19
          c-7.74-0.77-15.96,0-23.75,0c-8.48,0-16.96,0-25.45,0c-3,0-7.4-0.3-7.74,3.83C71.56,79.93,73.25,81.91,76.14,82.2
          c1.11,0.11,1.1-1.62,0-1.73c-3.55-0.35-3.55-5.22,0-5.57c2.21-0.22,4.56,0,6.78,0c5.09,0,10.18,0,15.27,0c10.18,0,20.36,0,30.53,0
          c3.66,0,3.43,5.23,0,5.57c-2.21,0.22-4.56,0-6.78,0c-5.09,0-10.18,0-15.27,0c-10.18,0-20.36,0-30.54,0
          C75.02,80.47,75.02,82.2,76.14,82.2z"
        />
        <path
          className="st0"
          d="M110.1,49.69c-2.73,0-5.46,0-8.18,0c-2.79,0-6.02-0.52-8.68,0.43c-10.03,3.58-16.22,13.53-16.48,23.91
          c-0.01,0.47,0.4,0.86,0.86,0.86c16.48,0,32.96,0,49.44,0c0.46,0,0.88-0.39,0.86-0.86c-0.28-11.19-7.07-20.55-17.6-24.31
          c-1.05-0.38-1.5,1.29-0.46,1.67c9.8,3.5,16.08,12.26,16.34,22.64c0.29-0.29,0.57-0.58,0.86-0.87c-16.48,0-32.96,0-49.44,0
          c0.29,0.29,0.58,0.58,0.86,0.87c0.13-5.23,1.68-9.91,4.67-14.19c2.27-3.24,7.71-8.42,11.97-8.42c4.99,0,9.98,0,14.97,0
          C111.21,51.42,111.21,49.69,110.1,49.69z"
        />
        <path
          className="st0"
          d="M91.38,56.65c-3.92,2.75-6.41,7.44-7.41,12.02c-0.18,0.82,1.08,1.16,1.25,0.35c0.93-4.22,3.18-8.69,6.82-11.24
          C92.72,57.29,92.07,56.16,91.38,56.65L91.38,56.65z"
        />
        <path
          className="st0"
          d="M93.5,60.56c-2.26,1.82-4.16,4.44-4.85,7.28c-0.2,0.81,1.05,1.16,1.25,0.34c0.65-2.63,2.42-5,4.52-6.7
          C95.08,60.96,94.15,60.04,93.5,60.56L93.5,60.56z"
        />
        <path
          id="color"
          fill={daiquiri.color}
          d="M125.44,90.91c0.33-0.31,0.59-0.65,0.69-1.01c0.47-1.7-1.29-2.18-3.52-2.17
          c1.83-0.71,3.06-1.7,2.05-3.1c-1.71-2.34-8.16-0.73-11.83,0.19c0.01-0.06,0.03-0.12,0.03-0.18c0.01-0.44-0.25-0.88-0.63-1.09
          c-1.57-0.91-4.27-0.06-5.92,0.16c-3.52,0.48-7.03,1.07-10.53,1.66c0.45-0.79-0.24-2.15-1.45-1.95c-2.13,0.34-16.56,1.71-14.63,5.68
          c0.18,0.38,0.6,0.64,1.19,0.81c-0.56,0.33-1.01,0.73-1.24,1.25c-0.37,0.85-0.18,1.4,0.37,1.74c-2.97,1.73,1.97,3.3,4.11,3.15
          c8.86-0.62,17.7-2.61,26.45-4.05c0.55-0.09,1.09-0.18,1.64-0.27c-7.16,1.45-14.39,2.6-21.55,3.99c-1.25,0.24-13.27,1.55-11.34,4.84
          c0.54,0.92,2.03,1.18,3.91,1.08c-0.58,0.23-1.17,0.47-1.73,0.74c-0.94,0.45-2.12,1.47-1.29,2.6c0.59,0.8,1.67,0.9,2.76,0.79
          c-0.81,0.32-1.52,0.75-1.82,1.35c-0.69,1.33,0.34,2.39,1.68,2.5c0.96,0.08,1.94,0.09,2.94,0.05c-0.93,0.52-1.7,1.32-1.21,2.47
          c0.27,0.64,0.87,0.94,1.57,1.07c-1.52,0.76-2.25,1.74-1.06,3c0.95,1.01,2.85,1,4.52,0.82c-3.62,0.83-6.72,2.21-5.38,4.5
          c0.65,1.1,2.22,1.56,4.2,1.64c-2.45,0.85-4.18,1.94-3.79,3.35c1.06,3.85,13.99-0.58,16.06-1.06c4.44-1.03,8.87-2.12,13.34-3.03
          c0.79-0.16,1.59-0.31,2.39-0.43c-0.71,0.31-1.44,0.57-2.15,0.83c-8.81,3.28-18.2,4.65-27.14,7.51c-4.78,1.53-1.51,3.86,2.08,3.23
          c9-1.59,17.63-4.92,26.64-6.58c0.18-0.03,0.36-0.05,0.54-0.08c-1.22,0.57-2.55,0.98-3.8,1.41c-4.94,1.71-10.03,3.03-15.06,4.45
          c-1.6,0.45-14.74,2.83-12.65,6.47c0.64,1.11,2.48,1.3,4.79,0.99c-1.12,0.53-2.09,1.21-2.48,2.16c-2.05,5.03,11.7,0.51,12.6,0.24
          c4.43-1.31,8.8-2.78,13.26-4c0.27-0.07,0.55-0.13,0.83-0.2c-1.56,0.78-3.25,1.39-4.79,2.01c-1.66,0.67-17.4,5.09-15.5,8.33
          c1.54,2.62,9.94-1.15,11.78-1.69c3.24-0.96,6.47-1.95,9.77-2.67c3.16-0.69,0.18-0.09-1.15,0.68c-1.48,0.86-3.15,1.44-4.78,1.97
          c-1.56,0.5-0.89,2.96,0.68,2.45c2.61-0.84,7.3-2.13,8.64-4.76c0.89-1.75,0.44-3.07-1.67-3.14c-3.12-0.09-6.59,1.24-9.65,2.24
          c1.24-0.46,2.46-0.93,3.68-1.42c2.64-1.07,6.19-2.12,7.95-4.52c3.31-4.53-11.35-0.33-11.62-0.25c-4.46,1.36-8.89,2.82-13.41,3.98
          c-0.82,0.21-1.65,0.38-2.49,0.54c1.29-0.55,2.85-0.88,3.88-1.23c4.55-1.52,9.19-2.74,13.79-4.1c2.94-0.86,6.93-1.56,9.38-3.56
          c1.03-0.84,1.22-2.2-0.01-2.95c-0.82-0.51-2.07-0.45-3.37-0.2c0.05-0.02,0.11-0.04,0.16-0.06c1.86-0.68,4.45-1.46,5.52-3.28
          c0.85-1.44-0.64-2.61-1.96-2.64c-0.25-0.01-0.51,0-0.76,0c1.44-0.62,2.82-1.47,3.2-2.69c0.77-2.5-2.63-2.49-5.99-1.96
          c2.19-1.51-0.33-3.29-3.82-2.84c-4.21,0.54-8.39,1.44-12.57,2.18c-2.56,0.45-5.12,0.87-7.69,1.17c-0.9,0.1-1.81,0.15-2.71,0.19
          c-0.29,0.01-0.58,0.06-0.83,0.12c0.01,0,0.01,0,0.02-0.01c8.45-3.15,18.14-2.21,26.79-4.82c4.75-1.43,3.94-4.96-0.39-5.05
          c1.88-0.34,4.09-0.8,5.34-2.1c1.13-1.18,0.03-2.59-1.28-2.82c-0.86-0.16-1.79-0.15-2.73-0.07c2.17-0.45,5.13-0.94,6.56-2.54
          c1.88-2.1-0.55-2.51-3.38-2.41c2.13-0.67,4.08-1.51,5.67-2.66c2.73-1.98,0.22-2.61-2.4-2.77C123.44,94.43,127.99,91.82,125.44,90.91
          z M96.16,113.41c-0.98,0.18-1.95,0.35-2.93,0.51c-1.05,0.18-2.11,0.29-3.16,0.4C92.05,113.85,94.25,113.65,96.16,113.41z
          M114.61,112.91c-0.47,0.06-1.16,0.17-1.78,0.36c-4.73,1.43-9.87,1.82-14.75,2.49c-0.25,0.03-0.79,0.08-1.51,0.16
          c3.63-0.64,7.23-1.4,10.85-2.07c2.18-0.4,4.37-0.77,6.58-0.9C114.25,112.93,114.44,112.92,114.61,112.91z"
        />
        <path
          id="chamoy"
          className="st4"
          style={{ display: `${daiquiri.chamoy}` }}
          d="M118.83,123.77c-0.25-0.01-0.51,0-0.76,0c1.23-0.53,2.39-1.22,2.95-2.17
          c-1.78,0.45-3.68,0.28-5.54,0.4c-0.36,0.14-0.72,0.27-1.08,0.4c-8.81,3.28-18.2,4.65-27.14,7.51c-4.78,1.53-1.51,3.86,2.08,3.23
          c9-1.59,17.64-4.92,26.64-6.58c0.18-0.03,0.36-0.05,0.54-0.08c-1.22,0.57-2.55,0.98-3.8,1.41c-4.94,1.71-10.03,3.03-15.06,4.45
          c-1.6,0.45-14.74,2.83-12.65,6.47c0.64,1.11,2.48,1.3,4.79,0.99c-1.12,0.53-2.09,1.21-2.48,2.16c-2.05,5.03,11.7,0.51,12.6,0.24
          c4.43-1.31,8.8-2.78,13.26-4c0.27-0.07,0.55-0.13,0.83-0.2c-1.56,0.78-3.25,1.39-4.79,2.01c-1.66,0.67-17.4,5.09-15.5,8.33
          c1.54,2.62,9.95-1.15,11.78-1.69c3.24-0.96,6.47-1.95,9.77-2.67c3.16-0.69,0.18-0.09-1.15,0.68c-1.48,0.86-3.15,1.44-4.78,1.97
          c-1.56,0.5-0.89,2.96,0.68,2.45c2.61-0.84,7.3-2.13,8.64-4.76c0.89-1.75,0.44-3.07-1.67-3.14c-3.11-0.09-6.59,1.24-9.65,2.24
          c1.24-0.46,2.46-0.93,3.68-1.42c2.64-1.07,6.19-2.12,7.95-4.52c3.31-4.53-11.35-0.33-11.62-0.25c-4.46,1.36-8.89,2.82-13.41,3.98
          c-0.82,0.21-1.65,0.38-2.49,0.54c1.29-0.55,2.85-0.88,3.88-1.23c4.55-1.52,9.19-2.74,13.79-4.1c2.94-0.86,6.93-1.56,9.38-3.56
          c1.03-0.84,1.22-2.2-0.01-2.95c-0.82-0.51-2.07-0.45-3.37-0.2c0.05-0.02,0.11-0.04,0.16-0.06c1.86-0.68,4.45-1.46,5.52-3.28
          C121.64,124.97,120.16,123.8,118.83,123.77z"
        />
        <path
          className="st0"
          d="M83.57,86.05c1.14,14.12,2.29,28.25,3.43,42.38c0.07,0.83,1.37,0.84,1.3,0c-1.15-14.12-2.29-28.25-3.43-42.38
          C84.8,85.22,83.5,85.21,83.57,86.05L83.57,86.05z"
        />
        <path
          className="st0"
          d="M89.27,95.03c1.14,14.13,2.29,28.26,3.43,42.38c0.07,0.83,1.37,0.84,1.3,0c-1.14-14.13-2.29-28.25-3.43-42.38
          C90.51,94.2,89.2,94.2,89.27,95.03L89.27,95.03z"
        />
        <polygon
          id="rombo"
          className="st0"
          points="219.95,128.26 213.05,134.83 216.92,143.54 208.03,146.96 208.26,156.48 198.73,156.26
          195.32,165.15 186.61,161.28 180.04,168.18 173.46,161.28 164.75,165.15 161.33,156.26 151.81,156.48 152.04,146.96 143.15,143.54
          147.02,134.83 140.12,128.26 147.02,121.69 143.15,112.98 152.04,109.56 151.81,100.03 161.34,100.27 164.75,91.38 173.46,95.24
          180.04,88.34 186.61,95.24 195.32,91.38 198.73,100.27 208.26,100.03 208.03,109.56 216.92,112.98 213.05,121.69 "
        />
        <text id="precio" transform="matrix(1 0 0 1 167.0544 141.5906)" className="st5 st1 st6">$45</text>
      </svg>
    </div>
  );
};

Daiquiri.propTypes = {
  daiquiri: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    chamoy: PropTypes.string,
    precio: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
};

export default Daiquiri;
