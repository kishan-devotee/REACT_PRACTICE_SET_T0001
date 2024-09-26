import React, { useState } from "react";
import { Button } from "antd";

const DynamicBackground: React.FC = () => {
  const [bgColor, setBgColor] = useState<undefined | string>();

  function getRandomColor() : string {
    let letters : string = "0123456789ABCDEF";
    let color : string = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div
      className="mainBackgroundLayout"
      style={{ backgroundColor: bgColor }}
      onClick={() => setBgColor(getRandomColor)}
    >
      <h1>Click Anywhere!</h1>
      <Button type="primary">Change Background</Button>
    </div>
  );
};

export default DynamicBackground;
