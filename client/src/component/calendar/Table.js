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

// const buildCalendar = (month) => {
//   let rows = [];
//     cell.value = [Math.random() * 24];
//     if (cell.value >= 8) cell.style.backgroundColor = "rgb(81.6%, 58.9%, 0%)";
//     else if (cell.value >= 4)
//       cell.style.backgroundColor = "rgb(94.1%, 75.4%, 27.1%)";
//     else if (cell.value >= 1)
//       cell.style.backgroundColor = "rgb(100%, 89.2%, 61.2%)";
//     else cell.style.backgroundColor = "white";
//     cell.onClick = showRecord(cell);
//   }
// };

// // show record on modal window
// const showRecord = (cell) => {
//   const timeArr = cell.value;
// };

const Table = ({ month }) => {
  const firstDate = new Date(`${month} 1, 2021 00:00:00`);
  const lastDate = new Date(2021, month + 1, 0);
  let dateArr = [];
  let weekArr = [];
  console.log(firstDate.getDay());
  console.log(lastDate.getDate());

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
            <td>일</td>
            <td>월</td>
            <td>화</td>
            <td>수</td>
            <td>목</td>
            <td>금</td>
            <td>토</td>
          </tr>
        </thead>
        <tbody>
          {dateArr.map((week) => {
            return (
              <tr>
                {week.map((date, idx) =>
                  date === 0 ? <td></td> : <td>{date}</td>
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
