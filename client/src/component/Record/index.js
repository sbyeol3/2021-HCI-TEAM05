import styled from "styled-components";
import RecordItems from "./RecordItems";

const Record = ({ setStatus, records, removeTime }) => {
  const onClickSave = () => setStatus(0);
  return (
    <Modal>
      <Title>Would you save today records?</Title>
      <RecordItems records={records} removeTime={removeTime} />
      <SaveButton onClick={onClickSave}>save</SaveButton>
    </Modal>
  );
};

export default Record;

const Modal = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 40%;
  left: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 350px;
  margin-top: -120px;
  margin-left: -250px;
  padding: 30px 60px;
  border: 1px solid #d0d0d0;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15); ;
`;

const Title = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

const SaveButton = styled.button`
  margin-top: auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff8513;
  color: #fff;
  font-size: 16px;
`;
