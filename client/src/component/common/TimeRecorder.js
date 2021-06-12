import styled, { css } from "styled-components";
import { ReactComponent as PlaySvg } from "../../svg/play.svg";
import { ReactComponent as PauseSvg } from "../../svg/pause.svg";
import { ReactComponent as StopSvg } from "../../svg/stop.svg";

const TimeRecorder = ({ status, setStatus }) => {
  const onClickButton = (type) => setStatus(type);
  return (
    <Wrapper>
      <PlayButton type={1} status={status} onClick={() => onClickButton(1)} />
      <PauseButton type={2} status={status} onClick={() => onClickButton(2)} />
      <StopButton type={3} status={status} onClick={() => onClickButton(3)} />
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
  padding: 10px;
  background-color: #fff;
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
`;

const PauseButton = styled(PauseSvg)`
  ${Icon}
  ${IconStyle}
  margin: 0 10px;
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
