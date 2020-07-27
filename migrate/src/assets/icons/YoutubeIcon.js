import React from "react";

function YoutubeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "29"}
      height={props.height || "20"}
      viewBox="0 0 29 20"
    >
      <g
        fill="none"
        fillRule="evenodd"
      >
        <path fill={props.fill || "#717171"} d="M27.662 3.088C27.337 1.873 26.38.915 25.164.59 22.961 0 14.126 0 14.126 0S5.291 0 3.088.59C1.873.915.915 1.873.59 3.088 0 5.29 0 9.888 0 9.888s0 4.597.59 6.8c.325 1.216 1.283 2.173 2.498 2.498 2.203.59 11.038.59 11.038.59s8.835 0 11.038-.59c1.216-.325 2.173-1.282 2.498-2.498.59-2.203.59-6.8.59-6.8s0-4.597-.59-6.8"/>
        <path fill="#FFFFFE" d="M11.301 14.126L18.641 9.888 11.301 5.65 11.301 14.126"/>
      </g>
    </svg>
  );
}

export default YoutubeIcon;
