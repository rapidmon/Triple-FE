import styled from "styled-components";
import Award from "./award";
import fadeIn from "../../theme/fadeIn";

const AwardWrapper = styled.ul`
  white-space: nowrap;
  margin: 50px 0px 140px 623px;
  transform: translate3d(0, 10px, 0);
  opacity: 0;
  animation: ${fadeIn} 0.7s ease-in-out 0.5s forwards;
`;

function Awards() {
  return (
    <AwardWrapper>
      <Award
        yearAndStore="2018 구글 플레이스토어"
        awardContent="올해의 앱 최우수상 수상"
        id="google"
      ></Award>
      <Award
        yearAndStore="2018 애플 앱스토어"
        awardContent="오늘의 여행앱 선정"
        id="apple"
      ></Award>
    </AwardWrapper>
  );
}

export default Awards;
