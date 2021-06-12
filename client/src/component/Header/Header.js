import { useState } from "react";
import styled from "styled-components";
import DayText from "./DayText";
import { ReactComponent as ArrowSvg } from "../../svg/arrow.svg";

const ONE_DAY = 86400000;

const Header = () => {
  const [date, setDate] = useState(new Date());

  const onClickArrow = (type) => {
    if (type) setDate(+date - ONE_DAY);
    else setDate(+date + ONE_DAY);
  };

  return (
    <Wrapper>
      <LeftArrow onClick={() => onClickArrow(true)} />
      <DayText fullDate={date} />
      <RightArrow onClick={() => onClickArrow(false)} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px;
`;

const LeftArrow = styled(ArrowSvg)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
`;
