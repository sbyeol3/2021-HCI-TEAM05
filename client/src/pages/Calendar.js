import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Table from "../component/calendar/Table";
import { ReactComponent as ArrowSvg } from "../svg/arrow.svg";

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

const CalendarWrap = styled.div`
  margin: 2rem;

  .calendar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rem 0;

      &--date {
        font-weight: bold;
        font-size: 1.5rem;

        span {
          margin-left: 1rem;
        }
      }
    }
  }
`;

const Calendar = ({ todayTime }) => {
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
    "December"
  ];

  return (
    <CalendarWrap>
      <div className="calendar">
        <div className="calendar__header">
          <LeftArrow
            className="calendar__header--left"
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
          <RightArrow
            className="calendar__header--right"
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
        <Table year={year} month={month} todayTime={todayTime} />
      </div>
    </CalendarWrap>
  );
};

export default Calendar;
