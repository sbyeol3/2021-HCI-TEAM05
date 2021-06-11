import React from "react";
import styled from "styled-components";
import DATA from "../../data.json";

const RankWrap = styled.div``;

const Rank = () => {
  const apps = DATA.icons;

  return (
    <RankWrap>
      <div className="top">
        <div className="top__title">Top Rank of This Month</div>
        <div className="top__box"></div>
      </div>
      <div className="average">
        <div className="average__title">Average Time of This Month</div>
        <div className="average__box"></div>
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

export default Rank;
