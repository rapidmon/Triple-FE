import styled from "styled-components";
import Awards from "../components/Awards/index";
import MainImg from "../components/MainImg/index";
import Title from "../components/Title/index";

const Wrapper = styled.section`
  position: relative;
  margin: 0 auto;
  width: 1040px;
  height: auto;
`;

function Section() {
  return (
    <Wrapper>
      <MainImg />
      <Title />
      <Awards />
    </Wrapper>
  );
}

export default Section;
