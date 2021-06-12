import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Table from "../component/calendar/Table";

const CalendarWrap = styled.div`
  margin: 2rem;
  width: 100%;

  .calendar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__header {
      display: flex;
      justify-content: space-between;
      margin: 2rem 0;

      &--date {
        font-weight: bold;

        span {
          margin-left: 1rem;
        }
      }
    }
  }
`;

const Calendar = () => {
  const [month, setMonth] = useState(6);
  // const [calendar, setCalendar] = useState(null);

  const monthStr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // useEffect(() => {
  //   const tempCal = buildCalendar(month);
  //   setCalendar(tempCal);
  // }, [month, calendar]);

  return (
    <CalendarWrap>
      <div className="calendar">
        <div className="calendar__header">
          <img
            className="calendar__header--left"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVORbI7UK59o9CpXQsF_fP-eyfJ4sp1wV7-Q&usqp=CAU"
            alt=""
            style={{ width: "20px", height: "20px" }}
            onClick={() => setMonth((prev) => prev - 1)}
          />
          <div className="calendar__header--date">
            {month} <span>{monthStr[month - 1]}</span>
          </div>
          <img
            className="calendar__header--right"
            src="https://www.pngjoy.com/pngm/125/13965639_aarow-computer-icon-left-right-arrow-cartoon-orange.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
            onClick={() => setMonth((prev) => prev + 1)}
          />
        </div>
        <Table month={month} />
      </div>
    </CalendarWrap>
  );
};

export default Calendar;
