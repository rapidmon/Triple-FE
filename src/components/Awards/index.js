import styled from "styled-components";
import Award from "./award";

const AwardWrapper = styled.ul`
  white-space: nowrap;
  margin: 50px 0px 140px 623px;
  transition: 0.7s ease-in-out 0.5s;
`;

function Awards() {
  return (
    <AwardWrapper>
      <Award
        text1="2018 구글 플레이스토어"
        text2="올해의 앱 최우수상 수상"
        id="google"
      ></Award>
      <Award
        text1="2018 애플 앱스토어"
        text2="오늘의 여행앱 선정"
        id="apple"
      ></Award>
    </AwardWrapper>
  );
}

export default Awards;
