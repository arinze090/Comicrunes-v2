import React from "react";
import useWindowDimensions from "./utils/Dimensions";

function Modal() {
  const { height, width } = useWindowDimensions();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width / 1.4,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div style={style}>
      <p>mbcdb</p>
    </div>
  );
}

export default Modal;
