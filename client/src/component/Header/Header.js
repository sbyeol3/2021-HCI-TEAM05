import styled from "styled-components";
import DayText from "./DayText";
import { ReactComponent as ArrowSvg } from "../../svg/arrow.svg";

const Header = ({ onClickArrow, date }) => {
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
  margin: 90px 100px 10px 100px;
`;

const LeftArrow = styled(ArrowSvg)`
  width: 30px;
  height: 30px;
  padding: 20px;
  cursor: pointer;
  fill: #ff8513;
`;

const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
`;
