import styled from "styled-components";
import Content from "./content";

const ContentWrapper = styled.ul`
  margin-left: 623px;
  padding-top: 150px;
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
