import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TableWrap = styled.div`
  width: 100%;

  .calendar__body {
    width: 100%;

    td {
      text-align: center;
    }

    thead {
      td {
        padding: 0 0 1rem 0;
      }
    }

    tbody {
      td {
        padding: 0 0 0.5rem 0;
      }
    }
  }
`;

const COLOR = ["#ff8513", "#ffa550", "#ffc288", "#ffe0c2", "white"];

const randomColor = (date) => {
  let arr = [];
  for (let i = 0; i < date; i++) {
    arr.push(COLOR[parseInt(Math.random() * 5)]);
  }

  return arr;
};

const Table = ({ year, month }) => {
  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);
  let dateArr = [];
  let weekArr = [];
  const [tdColor, setTdColor] = useState([]);
  const now = new Date();

  for (let i = 0; i < firstDate.getDay(); i++) {
    weekArr.push(0);
  }
  for (let i = 1; i <= lastDate.getDate(); i++) {
    if (weekArr.length < 7) weekArr.push(i);
    else {
      dateArr.push(weekArr);
      weekArr = [i];
    }
  }

  useEffect(() => {
    setTdColor(randomColor(lastDate.getDate()));
  }, [year, month]);

  return (
    <TableWrap>
      <table className="calendar__body">
        <thead>
          <tr>
            <td>Sun</td>
            <td>Mon</td>
            <td>Tue</td>
            <td>Wed</td>
            <td>Thu</td>
            <td>Fri</td>
            <td>Sat</td>
          </tr>
        </thead>
        <tbody>
          {dateArr.map((week, weekIdx) => {
            return (
              <tr>
                {week.map((date, dateIdx) =>
                  date === 0 ? (
                    <td></td>
                  ) : month === now.getMonth() + 1 ? (
                    <td
                      style={{
                        backgroundColor:
                          weekIdx * 7 + dateIdx < now.getDate()
                            ? tdColor[weekIdx * 7 + dateIdx]
                            : "white"
                      }}
                    >
                      {date}
                    </td>
                  ) : month < now.getMonth() + 1 ? (
                    <td
                      style={{
                        backgroundColor: tdColor[weekIdx * 7 + dateIdx]
                      }}
                    >
                      {date}
                    </td>
                  ) : (
                    <td>{date}</td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableWrap>
  );
};

export default Table;
