import React from "react";

export default function FilledHeartIcon(props) {
  return (
    <svg
      data-testid="heartSvg"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "20"}
      height={props.height || "17"}
      viewBox="0 0 20 17"
    >
      <path
        fill={ props.fill || "#9FA4A3" }
        stroke={ props.stroke || "#9FA4A3" }
        d="M18.996 5.815C18.908 3.158 16.835 1 14.17 1c-1.778 0-3.33.958-4.169 2.384C9.162 1.958 7.609 1 5.83 1 3.166 1 1.092 3.158 1.005 5.815.804 11.841 10 16.187 10 16.187s9.196-4.346 8.996-10.372z"
      />
    </svg>
  );
}
