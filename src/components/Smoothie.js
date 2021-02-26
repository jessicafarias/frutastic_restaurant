import '../styles/smoothies.css'
const Smoothie = (props) => {
  const {smoothie} = props; 
  return (
    <div>
      {/*<img src={smoothieImg} alt="smoo"></img>*/}
      <div>
        <svg version="1.1" id="smoothie" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 70 70">
          <path id="COLOR" fill={smoothie.color} d="M44.91,38.71c0.43-0.46,0.85-0.93,1.23-1.42c0.98-1.27,0.49-2.44-0.66-2.37
            c0.09-0.5-0.16-0.88-1.02-0.96c-0.32-0.03-0.67,0.02-1.03,0.13c-0.17-0.35-0.62-0.46-1.51-0.06c-0.51,0.23-1,0.51-1.49,0.81
            c0.57-0.87,0.67-1.54-0.51-1.43c-0.74,0.07-1.43,0.47-2.07,0.93c0.7-2.43-2.17-1.08-3.9-0.07c0.02-0.07,0.03-0.14,0.04-0.22
            c0.2-2.04-2.46-0.61-3.43,0.03c-0.11-0.9-1.67-0.54-2.76-0.12c0.02-0.59-0.58-1.18-1.2-0.76c-1.52,1.03-3.09,2.16-4.26,3.59
            c-0.48,0.59-0.84,2.09,0.06,2.4c-0.3,0.4-0.46,0.83-0.34,1.3c0.15,0.54,0.48,0.77,0.88,0.84c-0.44,0.61-0.66,1.21-0.51,1.76
            c0.22,0.79,0.85,0.87,1.65,0.59c-0.18,0.2-0.35,0.42-0.52,0.63c-0.46,0.61-0.24,1.54,0.53,1.72c0.4,0.1,0.85-0.02,1.3-0.24
            c-1.07,1.08-1.79,2.16-1.54,2.98c0.14,0.46,0.42,0.66,0.77,0.7c-0.56,0.5-1.15,1.12-1.15,1.76c0,0.4,0.19,0.68,0.46,0.83
            c-0.53,0.86-0.94,1.86-0.45,2.28c-0.19,0.4-0.27,0.8-0.19,1.17c0.2,0.95,1.02,0.86,1.97,0.38c-0.22,0.44-0.22,0.86,0.17,1.2
            c-0.19,0.33-0.31,0.66-0.36,0.99c-0.04,0.29-0.04,0.52,0,0.7c-1.2,1.26-0.5,2.11,0.63,2.24c-0.32,0.32-0.57,0.66-0.62,1.02
            c-0.07,0.49,0.08,0.89,0.38,1.13c-0.55,0.75-0.68,1.52,0.25,2.12c-0.83,1.08-1.16,2.39,0.99,1.96c0.7-0.14,1.4-0.45,2.08-0.83
            c-0.18,1.21,1.96,0.7,2.62,0.38c0.4-0.19,0.8-0.39,1.19-0.6c0.65,1.57,3.45-0.53,4.16-0.97c0,0,0.01,0,0.01-0.01
            c-0.78,0.85-1.16,1.95,0.48,2.29c0.97,0.2,2.11-0.5,2.93-0.93c0.14-0.07,0.27-0.15,0.41-0.23c-0.08,0.61,0.79,1.23,1.44,0.71
            c0.72-0.58,2.63-2.24,1.64-3.32c-0.25-0.28-0.58-0.36-0.94-0.32c0.65-0.64,0.95-1.48,0.28-2.33c-0.04-0.05-0.09-0.1-0.14-0.14
            c0.4-0.34,0.71-0.71,0.85-1.12c0.35-1.03-0.09-1.31-0.88-1.2c0.44-0.39,0.86-0.8,1.24-1.23c0.49-0.55,0.6-1.56-0.26-1.83
            c-0.15-0.05-0.32-0.06-0.48-0.05c0.16-0.46-0.02-0.87-0.37-1.1c1.25-0.89,2.17-1.89,1.61-2.73c-0.08-0.12-0.18-0.22-0.28-0.3
            c0.58-0.57,0.95-1.16,0.96-1.73c0.02-1.02-0.64-1.18-1.51-0.95c0.25-0.23,0.5-0.45,0.74-0.69c0.5-0.53,0.72-1.41,0.02-1.88
            c-0.21-0.14-0.44-0.19-0.67-0.2c0.59-0.48,1.18-1.04,1.33-1.73c0.16-0.7-0.34-1.18-0.94-1.3c0.75-0.79,1.39-1.62,1.81-2.51
            C46.68,38.98,45.92,38.63,44.91,38.71z M26.96,64.14c-0.13-0.03-0.12-0.14,0.14-0.4c0.35-0.36,0.73-0.7,1.13-1.03
            c0.67-0.37,1.3-0.83,1.89-1.2c0.67-0.43,1.33-0.87,1.98-1.32c1.7-0.93,3.47-1.76,5.13-2.6c-0.64,0.52-1.29,1.03-1.93,1.55
            C32.49,60.76,29.65,62.33,26.96,64.14z M33.16,55.24c0.28-0.16,0.56-0.33,0.84-0.49c-0.56,0.38-1.12,0.76-1.69,1.13
            C32.59,55.66,32.88,55.45,33.16,55.24z M43.51,40.99c-0.75,0.79-1.58,1.51-2.4,2.22c-2.84,2.46-5.85,4.73-8.86,6.99
            c2.69-2.4,5.34-4.83,8.12-7.12c1.08-0.89,2.3-1.99,3.63-2.63C43.84,40.64,43.67,40.82,43.51,40.99z"/>
          <g id="blanco">
            <path className="st1" d="M28.69,19.35c-2.03,1.42-3.32,3.86-3.84,6.22c-0.09,0.42,0.56,0.6,0.65,0.18c0.48-2.19,1.65-4.5,3.53-5.82
              C29.38,19.68,29.05,19.1,28.69,19.35L28.69,19.35z"/>
            <path className="st1" d="M27.6,39.23c0.59,7.32,1.18,14.64,1.78,21.95c0.03,0.43,0.71,0.43,0.67,0c-0.59-7.32-1.19-14.64-1.78-21.95
              C28.24,38.8,27.56,38.8,27.6,39.23L27.6,39.23z"/>
            <path className="st1" d="M29.79,21.38c-1.17,0.94-2.15,2.3-2.51,3.77c-0.1,0.42,0.55,0.6,0.65,0.18c0.34-1.36,1.25-2.59,2.34-3.47
              C30.61,21.58,30.13,21.11,29.79,21.38L29.79,21.38z"/>
            <path className="st1" d="M24.64,34.58c0.59,7.32,1.19,14.64,1.78,21.95c0.04,0.43,0.71,0.43,0.67,0c-0.59-7.32-1.18-14.64-1.78-21.95
              C25.29,34.15,24.61,34.15,24.64,34.58L24.64,34.58z"/>
            <path className="st1" d="M38.39,15.75c-1.41,0-2.83,0-4.24,0c-1.45,0-3.12-0.27-4.49,0.22c-5.2,1.85-8.4,7.01-8.54,12.38
              c-0.01,0.24,0.21,0.45,0.45,0.45c8.54,0,17.07,0,25.61,0c0.24,0,0.45-0.2,0.45-0.45c-0.14-5.79-3.66-10.64-9.12-12.59
              c-0.54-0.19-0.78,0.67-0.24,0.86c5.07,1.81,8.33,6.35,8.46,11.73c0.15-0.15,0.3-0.3,0.45-0.45c-8.54,0-17.07,0-25.61,0
              c0.15,0.15,0.3,0.3,0.45,0.45c0.07-2.71,0.87-5.13,2.42-7.35c1.17-1.68,3.99-4.36,6.2-4.36c2.59,0,5.17,0,7.76,0
              C38.96,16.64,38.96,15.75,38.39,15.75z"/>
            <path className="st1" d="M20.79,32.58c8.5,0,16.99,0,25.48,0c1.55,0,3.83,0.15,4.01-1.99c0.12-1.52-0.75-2.54-2.25-2.69
              c-4.01-0.4-8.27,0-12.3,0c-4.39,0-8.79,0-13.18,0c-1.55,0-3.83-0.15-4,1.99C18.42,31.41,19.3,32.44,20.79,32.58
              c0.58,0.06,0.57-0.84,0-0.9c-1.84-0.18-1.84-2.7,0-2.89c1.15-0.11,2.36,0,3.52,0c2.64,0,5.27,0,7.91,0c5.27,0,10.54,0,15.82,0
              c1.89,0,1.78,2.71,0,2.89c-1.15,0.11-2.36,0-3.51,0c-2.64,0-5.27,0-7.91,0c-5.27,0-10.54,0-15.82,0
              C20.22,31.69,20.22,32.58,20.79,32.58z"/>
            <path className="st1" d="M20.53,32.14c1.15,12.14,2.31,24.28,3.46,36.42C24.01,68.8,24.18,69,24.44,69c6.65,0,13.31,0,19.96,0
              c0.26,0,0.42-0.2,0.45-0.45c1.15-12.14,2.31-24.28,3.46-36.42c0.02-0.24-0.22-0.45-0.45-0.45c-8.96,0-17.92,0-26.88,0
              c-0.58,0-0.58,0.9,0,0.9c8.96,0,17.92,0,26.88,0c-0.15-0.15-0.3-0.3-0.45-0.45c-1.15,12.14-2.31,24.28-3.46,36.42
              c0.15-0.15,0.3-0.3,0.45-0.45c-6.65,0-13.3,0-19.96,0c0.15,0.15,0.3,0.3,0.45,0.45c-1.15-12.14-2.31-24.28-3.46-36.42
              C21.37,31.57,20.47,31.56,20.53,32.14z"/>
            <defs>
              <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="30.03" y="1.38" width="8.45" height="47.71">
                
                  <feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB" result="source"/>
                <feFlood result="back"/>
                <feBlend  in="source" in2="back" mode="normal"/>
              </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x="30.03" y="1.38" width="8.45" height="47.71" id="SVGID_1_">
              <g className="st2"><rect x="27.05" y="33.34" className="st1" width="13.43" height="17.14"/></g>
            </mask>
            <path className="st3" d="M33.57,1.83c-0.85,10.89-1.69,21.77-2.54,32.66c-0.33,4.26-0.66,8.52-0.99,12.78
              c-0.17,2.27,4.19,2.39,4.89,0.52c0.33-0.86,0.18-2.19,0.25-3.09c1.1-14.19,2.2-28.37,3.31-42.56c0.02-0.26-0.22-0.43-0.45-0.45
              c-1.34-0.1-2.68-0.21-4.02-0.31c-0.57-0.04-0.57,0.85,0,0.89c1.34,0.11,2.68,0.21,4.02,0.31c-0.15-0.15-0.3-0.3-0.45-0.45
              c-0.85,10.89-1.69,21.77-2.54,32.66c-0.33,4.26-0.66,8.52-0.99,12.78c-0.08,1.04-3.21,0.79-3.1-0.58c0.05-0.65,0.1-1.3,0.15-1.95
              c0.19-2.48,0.39-4.97,0.58-7.45c0.93-11.92,1.85-23.85,2.78-35.77C34.51,1.25,33.61,1.26,33.57,1.83z"/>
          </g>
        </svg>
      </div>
      <p>{smoothie.desciption}</p>
      <button>Add</button>
    </div>
  );
}

export default Smoothie;