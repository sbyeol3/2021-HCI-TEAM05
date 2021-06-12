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
  const [year, setYear] = useState(2021);
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
    "December",
  ];

  return (
    <CalendarWrap>
      <div className="calendar">
        <div className="calendar__header">
          <img
            className="calendar__header--left"
            src="http://www.clker.com/cliparts/L/Y/I/S/g/X/yellow-arrow-hi.png"
            alt=""
            style={{
              width: "20px",
              height: "20px",
              transform: "rotate(180deg)"
            }}
            onClick={() =>
              setMonth((prev) => {
                if (prev > 1) return prev - 1;
                else {
                  setYear((prev) => prev - 1);
                  return 12;
                }
              })
            }
          />
          <div className="calendar__header--date">
            {month} <span>{monthStr[month - 1]}</span>
          </div>
          <img
            className="calendar__header--right"
            src="http://www.clker.com/cliparts/L/Y/I/S/g/X/yellow-arrow-hi.png"
            alt=""
            style={{
              width: "20px",
              height: "20px"
            }}
            onClick={() =>
              setMonth((prev) => {
                if (prev < 12) return prev + 1;
                else {
                  setYear((prev) => prev + 1);
                  return 1;
                }
              })
            }
          />
        </div>
        <Table year={year} month={month} />
      </div>
    </CalendarWrap>
  );
};

export default Calendar;
