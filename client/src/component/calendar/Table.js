import React from "react";
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

const tdColor = ["#ff8513", "#ffa550", "#ffc288", "#ffe0c2", "white"];

const Table = ({ year, month }) => {
  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);
  let dateArr = [];
  let weekArr = [];

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
          {dateArr.map((week) => {
            return (
              <tr>
                {week.map((date) =>
                  date === 0 ? (
                    <td></td>
                  ) : (
                    <td
                      style={{
                        backgroundColor: tdColor[Math.floor(Math.random() * 5)]
                      }}
                    >
                      {date}
                    </td>
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
