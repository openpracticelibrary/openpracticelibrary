import React from 'react';

const FacebookIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "18px"}
    height={props.height || "17px"}
    viewBox="0 0 18 18"
  >
    <g fill="none">
      <path fill={props.fill || "#485A96"} d="M16.826 17.89c.542 0 .983-.44.983-.983V1.064c0-.543-.44-.983-.983-.983H.983C.44.081 0 .521 0 1.064v15.843c0 .543.44.983.983.983h15.843z"/>
      <path fill="#FFF" d="M12.373 17.89v-6.9h2.314l.347-2.69h-2.661V6.583c0-.779.216-1.31 1.332-1.31h1.423V2.868c-.246-.033-1.091-.106-2.074-.106-2.052 0-3.457 1.253-3.457 3.555V8.3h-2.32v2.69h2.32v6.9h2.776z"/>
    </g>
  </svg>
);

export default FacebookIcon;
