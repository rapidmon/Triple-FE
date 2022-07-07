import styled from "styled-components";

const Text = styled.div`
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
        <span>{num}</span>
        {strong}
      </Emphasis>
      {text}
    </Text>
  );
}

export default Content;
