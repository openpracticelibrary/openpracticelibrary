import React from "react";

function MoreItemsIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "5"}
      height={props.height || "17"}
      viewBox="0 0 5 17"
    >
      <path fill={props.fill ||"#101010"} d="M2.415 4.83c1.333 0 2.415-1.082 2.415-2.415C4.83 1.08 3.748 0 2.415 0 1.08 0 0 1.081 0 2.415 0 3.748 1.081 4.83 2.415 4.83zm0 7.244C1.08 12.074 0 13.155 0 14.489c0 1.333 1.081 2.414 2.415 2.414 1.333 0 2.415-1.08 2.415-2.414s-1.082-2.415-2.415-2.415zm0-6.037C1.08 6.037 0 7.118 0 8.452c0 1.333 1.081 2.414 2.415 2.414 1.333 0 2.415-1.08 2.415-2.414S3.748 6.037 2.415 6.037z"/>
    </svg>
  );
}

export default MoreItemsIcon;
