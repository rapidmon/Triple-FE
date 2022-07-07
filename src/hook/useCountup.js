import { useEffect, useRef } from "react";
import { easeOutExpo } from "../lib/util";
import {
  START_NUMBER,
  DURATION_TIME,
  FRAME_RATE,
  PROGRESS_DONE,
} from "../lib/constants";

const CountUp = (CountUpNumber) => {
  const domRef = useRef();
  const totalFrame = Math.round(DURATION_TIME / FRAME_RATE);
  useEffect(() => {
    const { current } = domRef;
    let currentNumber = START_NUMBER;
    const counter = setInterval(() => {
      const progress = easeOutExpo(currentNumber / totalFrame);
      currentNumber++;
      current.innerText = Math.round(CountUpNumber * progress);
      if (progress === PROGRESS_DONE) {
        clearInterval(counter);
      }
    }, FRAME_RATE);
  }, [CountUpNumber, totalFrame]);
  return {
    ref: domRef,
  };
};

export default CountUp;
