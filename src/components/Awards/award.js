import styled from "styled-components";
import playstore from "../../assets/play-store2x.png";
import appstore from "../../assets/badge-apple4x.png";

const Item = styled.li`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  display: inline-block;
  font-family: sans-serif;
  background-image: ${(props) =>
    props.id === "google" ? `url(${playstore})` : `url(${appstore})`};
  background-position: left top;
  background-repeat: no-repeat;
  color: var(--color-gray800);
  font-weight: bold;
`;

function Award({ text1, text2, id }) {
  return (
    <Item id={id}>
      {text1}
      <br />
      {text2}
    </Item>
  );
}

export default Award;
