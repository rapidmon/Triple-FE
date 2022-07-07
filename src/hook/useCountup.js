import { useEffect, useRef } from "react";
import { easeOutExpo } from "../lib/util";
import { START_NUMBER, DURATION_TIME, FRAME_RATE } from "../lib/constants";

const CountUp = (num) => {
  const domRef = useRef();
  const totalFrame = Math.round(DURATION_TIME / FRAME_RATE);

  useEffect(() => {
    const { current } = domRef;
    let currentNumber = START_NUMBER;
    const counter = setInterval(() => {
      const progress = easeOutExpo(currentNumber / totalFrame);
      currentNumber++;
      current.innerText = Math.round(num * progress);
      if (progress === true) {
        clearInterval(counter);
      }
    }, FRAME_RATE);
  }, [num, totalFrame]);
  return {
    ref: domRef,
  };
};

export default CountUp;
