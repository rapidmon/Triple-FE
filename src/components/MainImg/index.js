import styled from "styled-components";
import triple from "../../assets/triple2x.png";
import fadeIn from "../../theme/fadeIn";

const Logo = styled.p`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  box-sizing: border-box;
  background-image: url(${triple});
  background-repeat: no-repeat;
  text-align: center;
  color: var(--color-gray700);
  transform: translate3d(0, 10px, 0);
  opacity: 0;
  animation: ${fadeIn} 0.7s ease-in-out 0.3s forwards;
`;

function MainImg() {
  return <Logo>2021년 12월 기준</Logo>;
}

export default MainImg;
