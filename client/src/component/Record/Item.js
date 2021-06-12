import { useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as PencilSvg } from "../../svg/pencil.svg";
import { ReactComponent as CancelSvg } from "../../svg/cancel.svg";
import { ReactComponent as CheckSvg } from "../../svg/check.svg";

const convertTime = (time) => [
  (time.getHours() + "").padStart(2, 0),
  (time.getMinutes() + "").padStart(2, 0),
  (time.getSeconds() + "").padStart(2, 0),
];

const Item = ({ idx, time, removeTime, editTime }) => {
  const [mode, setMode] = useState(false);
  const [itemTime, setTime] = useState([
    ...convertTime(time[0]),
    ...convertTime(time[1]),
  ]);

  const onClickCancel = () => removeTime(idx);
  const onclickEdit = () => setMode(true);
  const onClickCheck = () => {
    setMode(false);
    const result = [
      new Date(
        time[0].getFullYear(),
        time[0].getMonth(),
        time[0].getDate(),
        itemTime[0],
        itemTime[1],
        itemTime[2]
      ),
      new Date(
        time[1].getFullYear(),
        time[1].getMonth(),
        time[1].getDate(),
        itemTime[3],
        itemTime[4],
        itemTime[5]
      ),
    ];
    editTime(result, idx);
  };

  const onChangeTime = (e, idx) => {
    if (!mode) return;
    const updatedTime = itemTime.map((t, i) => {
      if (i !== idx) return t;
      return e.target.value;
    });
    setTime(updatedTime);
  };

  return (
    <Wrapper>
      <Time>
        <TimeInput value={itemTime[0]} onChange={(e) => onChangeTime(e, 0)} />
        :
        <TimeInput value={itemTime[1]} onChange={(e) => onChangeTime(e, 1)} /> :
        <TimeInput value={itemTime[2]} onChange={(e) => onChangeTime(e, 2)} />
        ~
        <TimeInput value={itemTime[3]} onChange={(e) => onChangeTime(e, 3)} />
        :
        <TimeInput value={itemTime[4]} onChange={(e) => onChangeTime(e, 4)} /> :
        <TimeInput value={itemTime[5]} onChange={(e) => onChangeTime(e, 5)} />
      </Time>
      {mode ? (
        <CheckIcon onClick={onClickCheck} />
      ) : (
        <PencilIcon onClick={onclickEdit} />
      )}
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
  display: flex;
  justify-content: center;
  padding: 5px;
  margin-right: 5px;
  border-radius: 3px;
  background-color: rgba(80, 188, 223, 0.5);
`;

const TimeInput = styled.input`
  width: 30px;
  background: none;
  border: none;
  font-size: 16px;
  text-align: center;
  font-weight: 800;
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

const CheckIcon = styled(CheckSvg)`
  ${Icon}
  width: 14px;
  height: 14px;
  fill: "#ff8513";
`;

const CancelIcon = styled(CancelSvg)`
  ${Icon}
`;
