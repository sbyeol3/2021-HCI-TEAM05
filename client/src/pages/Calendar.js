import React from "react";
import styled from "styled-components";

const CalendarWrap = styled.div``;

const Calendar = () => {
  const handleClick = () => {};

  return (
    <CalendarWrap>
      <div className="calendar">
        <div className="calendar__header">
          <img
            className="calendar__header--left"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVORbI7UK59o9CpXQsF_fP-eyfJ4sp1wV7-Q&usqp=CAU"
            alt=""
            style={{ width: "20px", height: "20px" }}
            onClick={handleClick}
          />
          <div className="calendar__header--date"></div>
          <img
            className="calendar__header--right"
            src="https://www.pngjoy.com/pngm/125/13965639_aarow-computer-icon-left-right-arrow-cartoon-orange.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
            onClick={handleClick}
          />
        </div>
        <div className="calendar__body"></div>
      </div>
    </CalendarWrap>
  );
};

export default Calendar;
