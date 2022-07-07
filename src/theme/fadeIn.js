import { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
      transform: translate3d(0, 10px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
`;

export default fadeIn;
