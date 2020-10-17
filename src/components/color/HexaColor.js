import React from "react";
import { hexaColor } from "../../utils/hexadecimal-color-generator";
// HexaColor component
const HexaColor = (props) => {
  return (
    <div style={{ textAlign: "center", border: "2px solid", height: 50 }}>
      {hexaColor()}
    </div>
  );
};

HexaColor.propTypes = {};

export default HexaColor;
