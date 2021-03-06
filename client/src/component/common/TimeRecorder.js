import styled, { css } from "styled-components";
import { ReactComponent as PlaySvg } from "../../svg/play.svg";
import { ReactComponent as StopSvg } from "../../svg/stop.svg";

const TimeRecorder = ({ status, setStatus }) => {
  const onClickButton = (type) => setStatus(type);
  const onClickStop = () => {
    if (status === 1) onClickButton(3);
  };
  return (
    <Wrapper>
      <PlayButton type={1} status={status} onClick={() => onClickButton(1)} />
      <StopButton type={3} status={status} onClick={onClickStop} />
    </Wrapper>
  );
};

export default TimeRecorder;

const Wrapper = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15); ;
`;

const Icon = css`
  width: 30px;
  height: 30px;
  padding: 10px;
`;

const IconStyle = css`
  border: 2px solid #d0d0d0;
  border-radius: 10px;
  fill: ${({ type, status }) => (type === status ? "#ff8513" : "#d0d0d0")};
  background-color: ${({ type, status }) =>
    type === status ? "#d0d0d0" : "#fff"};
  cursor: pointer;
  &:hover {
    background-color: #d0d0d0;
    * {
      fill: #ff8513;
    }
  }
`;

const PlayButton = styled(PlaySvg)`
  ${Icon}
  ${IconStyle}
  margin-right: 10px;
`;

const StopButton = styled(StopSvg)`
  ${IconStyle}
  width: 40px;
  height: 40px;
  padding: 5px;
  * {
    fill: ${({ type, status }) => (type === status ? "#ff8513" : "#d0d0d0")};
  }
`;
