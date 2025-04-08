import React from "react";
import Lottie from "lottie-react";
import oopsAnimation from "../../assets/oops.json";

function NotFound() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center",  }}>
      <Lottie animationData={oopsAnimation} style={{ width: 880}} />
    </div>
  );
}

export default NotFound;
