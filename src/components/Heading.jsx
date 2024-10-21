import React from "react";

function Heading() {
  function dynamicGreeting(time) {
    const greetTime =
      time >= 0 && time < 12
        ? "Morning"
        : time >= 12 && time < 17
        ? "Afternoon"
        : time >= 17 && time < 19
        ? "Evening"
        : time >= 19
        ? "Night"
        : null;
    return greetTime;
  }
  const now = new Date().getHours();
  return <h2>Good {dynamicGreeting(now)}, what are your plans today?</h2>; // just calling the function not returning anything
}

export default Heading;
