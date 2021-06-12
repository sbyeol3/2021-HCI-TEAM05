import styled from "styled-components";
import Header from "../component/Header";
import { ReactComponent as CalendarSvg } from "../svg/calendar.svg";

const Today = ({ history }) => {
  const onClickCalendar = () => history.push("/month");
  return (
    <Wrapper>
      <CalendarIcon onClick={onClickCalendar} />
      <Header />
    </Wrapper>
  );
};

export default Today;

const Wrapper = styled.div`
  position: relative;
`;

const CalendarIcon = styled(CalendarSvg)`
  position: absolute;
  top: -50px;
  right: 40px;
  width: 30px;
  height: 30px;
  fill: #ff5e13;
  cursor: pointer;
`;
