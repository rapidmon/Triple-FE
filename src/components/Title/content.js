import styled from "styled-components";
import Emphasis from "./emphasis";

const Text = styled.li`
  font-size: 36px;
  letter-spacing: -1px;
  color: var(--color-gray);
  margin-bottom: 20px;
  font-family: sans-serif;
  line-height: 36px;
`;

function Content({ countUpNumber, unitText, nounText }) {
  return (
    <Text>
      <Emphasis Emphasiscontent={countUpNumber} />
      <Emphasis Emphasiscontent={unitText} />
      {nounText}
    </Text>
  );
}

export default Content;
