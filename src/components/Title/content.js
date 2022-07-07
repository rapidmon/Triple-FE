import styled from "styled-components";
import CountUp from "../../hook/useCountup";

const Text = styled.li`
  font-size: 36px;
  letter-spacing: -1px;
  color: var(--color-gray);
  margin-bottom: 20px;
  font-family: sans-serif;
  line-height: 36px;
`;

const Emphasis = styled.strong`
  font-weight: bold;
`;

function Content({ num, strong, text }) {
  return (
    <Text>
      <Emphasis>
        <span {...CountUp(num)}>{num}</span>
        {strong}
      </Emphasis>
      {text}
    </Text>
  );
}

export default Content;
