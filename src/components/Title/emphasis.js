import styled from "styled-components";
import CountUp from "../../hook/useCountup";

const Strong = styled.strong`
  font-weight: bold;
`;

function Emphasis({ Emphasiscontent }) {
  return (
    <>
      {isNaN(Emphasiscontent) ? (
        <Strong>{Emphasiscontent}</Strong>
      ) : (
        <Strong {...CountUp(Emphasiscontent)}>{Emphasiscontent}</Strong>
      )}
    </>
  );
}

export default Emphasis;
