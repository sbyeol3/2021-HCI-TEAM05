import { useState } from "react";
import styled from "styled-components";
import { VictoryPie } from "victory";

import Header from "../component/Header";
import { ReactComponent as CalendarSvg } from "../svg/calendar.svg";
import { TIME, TOTAL_TIME } from "../constants/time";

const ONE_DAY = 86400000;
const PIE_COLOR = ["#d0d0d0", "#ff8513"];

const createRandomDate = (date, type = 0) => {
  const dateFormat = new Date(date);
  const random = (dateFormat.getMonth() + dateFormat.getDate()) % 9;
  if (type === 1) return TOTAL_TIME[random];
  return TIME[random];
};

const Today = ({ history, status, setStatus }) => {
  const [date, setDate] = useState(new Date());
  // const [status, setStatus] = useState(1);

  const onClickArrow = (type) => {
    if (type) setDate(+date - ONE_DAY);
    if (!type && +new Date() > +date + ONE_DAY) setDate(+date + ONE_DAY);
  };
  const onClickCalendar = () => history.push("/month");

  return (
    <Wrapper>
      <CalendarIcon onClick={onClickCalendar} />
      <Header onClickArrow={onClickArrow} date={date} />
      <TotalTime>{createRandomDate(date, 1)}</TotalTime>
      <PieWrapper>
        <VictoryPie
          colorScale={PIE_COLOR}
          data={createRandomDate(date)}
          labelComponent={<span />}
        />
      </PieWrapper>
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
  fill: #ff8513;
  cursor: pointer;
`;

const TotalTime = styled.div`
  font-size: 28px;
  font-weight: 800;
  text-align: center;
`;

const PieWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 600px;
`;
