import React from "react";

const Spinner: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="#1976d2"
      strokeWidth="5"
      strokeDasharray="90,150"
      strokeDashoffset="0"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default Spinner;
