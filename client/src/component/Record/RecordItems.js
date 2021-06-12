import styled from "styled-components";
import Item from "./Item";

const RecordItems = ({ records, removeTime }) => {
  return (
    <Wrapper>
      {records.map((rec, idx) => (
        <Item time={rec} key={rec} idx={idx} removeTime={removeTime} />
      ))}
    </Wrapper>
  );
};

export default RecordItems;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
