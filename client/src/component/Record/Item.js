import styled, { css } from "styled-components";
import { ReactComponent as PencilSvg } from "../../svg/pencil.svg";
import { ReactComponent as CancelSvg } from "../../svg/cancel.svg";

const convertTime = (time) =>
  `${(time.getHours() + "").padStart(2, 0)}:${(time.getMinutes() + "").padStart(
    2,
    0
  )}:${(time.getSeconds() + "").padStart(2, 0)}`;

const Item = ({ idx, time, removeTime }) => {
  const onClickCancel = () => removeTime(idx);
  return (
    <Wrapper>
      <Time>{convertTime(time[0]) + " ~ " + convertTime(time[1])}</Time>
      <PencilIcon />
      <CancelIcon onClick={onClickCancel} />
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const Time = styled.div`
  flex: 1;
  padding: 5px;
  margin-right: 5px;
  border-radius: 3px;
  background-color: rgba(80, 188, 223, 0.5);
  font-size: 15px;
  text-align: center;
`;

const Icon = css`
  width: 13px;
  height: 13px;
  margin: 0 4px;
  fill: #666;
  cursor: pointer;
`;

const PencilIcon = styled(PencilSvg)`
  ${Icon}
`;
const CancelIcon = styled(CancelSvg)`
  ${Icon}
`;
