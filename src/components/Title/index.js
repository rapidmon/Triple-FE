import styled from "styled-components";
import Content from "./content";
import fadeIn from "../../theme/fadeIn";

const ContentWrapper = styled.ul`
  margin-left: 623px;
  padding-top: 150px;
  transform: translate3d(0, 10px, 0);
  opacity: 0;
  animation: ${fadeIn} 0.7s ease-in-out 0.4s forwards;
`;

function Title() {
  return (
    <ContentWrapper>
      <Content num="700" strong="만 명" text="의 여행자"></Content>
      <Content num="100" strong="만 개" text="의 여행 리뷰"></Content>
      <Content num="470" strong="만 개" text="의 여행 일정"></Content>
    </ContentWrapper>
  );
}

export default Title;
