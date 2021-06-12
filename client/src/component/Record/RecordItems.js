import styled from "styled-components";
import Item from "./Item";

const RecordItems = () => {
  return (
    <Wrapper>
      <Item time="00:00:00 - 03:40:27" />
      <Item time="11:41:02 - 12:23:40" />
      <Item time="14:50:54 - 15:59:59" />
      <Item time="16:57:22 - 23:50:51" />
    </Wrapper>
  );
};

export default RecordItems;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
