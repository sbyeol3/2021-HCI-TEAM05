import styled from "styled-components";
import Header from "../component/Header";
import { ReactComponent as CalendarSvg } from "../svg/calendar.svg";

const Today = () => {
  return (
    <Wrapper>
      <CalendarIcon />
      <Header />
    </Wrapper>
  );
};

export default Today;

const Wrapper = styled.div``;

const CalendarIcon = styled(CalendarSvg)`
  width: 30px;
  height: 30px;
  fill: #ff5e13;
`;
