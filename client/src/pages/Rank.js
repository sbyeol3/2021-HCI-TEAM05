import React from "react";
import styled from "styled-components";
import DATA from "../data.json";
import { withRouter } from "react-router-dom";

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

const Rank = () => {
  const apps = DATA.icons;

  return (
    <RankWrap>
      <div className="top">
        <div className="top__title">Top Rank of This Month</div>
        <div className="top__box">
          <span>1. </span>adadad <br />
          <span>2. </span>sdfsdfd <br />
          <span>3. </span>sdfsdf <br />
        </div>
      </div>
      <div className="average">
        <div className="average__title">Average Time of This Month</div>
        <div className="average__box">9'00"11</div>
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
