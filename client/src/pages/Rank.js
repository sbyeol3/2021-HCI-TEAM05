import React from "react";
import styled from "styled-components";
import DATA from "../data.json";
import { withRouter } from "react-router-dom";

import { TOTAL_TIME } from "../constants/time";

const RankWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  overflow-y: scroll;

  [class*="title"] {
    font-weight: bold;
    margin-left: 1rem;
  }

  [class*="box"] {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 15px;
    border: solid 2px lightgray;
  }

  .top {
    margin: 1rem 1rem 0 1rem;

    &__box {
      span {
        font-weight: bold;
        padding: 0.3rem 1rem 0 0.3rem;
      }
    }
  }

  .average {
    margin: 1rem 1rem 0 1rem;

    &__box {
      display: flex;
      justify-content: center;
      font-weight: bold;
    }
  }

  .most {
    margin: 1rem 1rem 0 1rem;

    &__box {
      display: flex;
      justify-content: space-evenly;

      &--icon {
        border: none;
        width: 3rem;
      }
    }
  }
`;

const getAverage = () => {
  let timeLength = TOTAL_TIME.length;
  let hour = [];
  let min = [];
  let sec = [];

  for (let i = 0; i < TOTAL_TIME.length; i++) {
    const temp = TOTAL_TIME[i].split(":");
    hour.push(Number(temp[0]));
    min.push(Number(temp[1]));
    sec.push(Number(temp[2]));
  }

  let hour_avg = hour.reduce((acc, cur) => acc + cur);
  let min_avg =
    min.reduce((acc, cur) => acc + cur) + (hour_avg % timeLength) * 6;
  hour_avg = Math.floor(hour_avg / timeLength);
  let sec_avg =
    sec.reduce((acc, cur) => acc + cur) + (min_avg % timeLength) * 6;
  min_avg = Math.floor(min_avg / timeLength);
  sec_avg = Math.floor(sec_avg / timeLength);

  return `${hour_avg}:${min_avg}:${sec_avg}`;
};

const Rank = () => {
  const apps = DATA.icons;
  const timeDescend = TOTAL_TIME.sort().reverse();
  const avgTime = getAverage();

  return (
    <RankWrap>
      <div className="top">
        <div className="top__title">Top Rank of This Month</div>
        <div className="top__box">
          <span>1. </span>
          {timeDescend[0]} <br />
          <span>2. </span>
          {timeDescend[1]} <br />
          <span>3. </span>
          {timeDescend[2]} <br />
        </div>
      </div>
      <div className="average">
        <div className="average__title">Average Time of This Month</div>
        <div className="average__box">{avgTime}</div>
      </div>
      <div className="most">
        <div className="most__title">Most Used Apps</div>
        <div className="most__box">
          {apps.map((app, idx) => {
            return (
              <img key={idx} className="most__box--icon" src={app} alt="" />
            );
          })}
        </div>
      </div>
    </RankWrap>
  );
};

export default withRouter(Rank);
