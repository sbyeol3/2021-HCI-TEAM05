import styled from "styled-components";
import RecordItems from "./RecordItems";

const Record = ({ setStatus }) => {
  const onClickSave = () => setStatus(0);
  return (
    <Modal>
      <Title>Would you save today records?</Title>
      <RecordItems />
      <SaveButton onClick={onClickSave}>save</SaveButton>
    </Modal>
  );
};

export default Record;

const Modal = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 300px;
  margin-top: -150px;
  margin-left: -250px;
  padding: 30px 60px;
  border: 1px solid #d0d0d0;
  background-color: #fff;
`;

const Title = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

const SaveButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff8513;
  color: #fff;
  font-size: 16px;
`;
