import React from "react";

function Heading() {
  function dynamicGreeting(time) {
    const greetTime =
      time >= 6 && time < 12
        ? "Morning"
        : time >= 12 && time < 18
        ? "Afternoon"
        : time >= 18 && time < 21
        ? "Evening"
        : time >= 21 || time < 6
        ? "Night"
        : null;
    return greetTime;
  }
  const now = new Date().getHours();
  const greet = dynamicGreeting(now);
  return <h2>Good {greet}, { greet != 'Night' ? ('what are your plans today?') : ('what are your plans tomorrow?') }</h2>; // just calling the function not returning anything
}

export default Heading;
