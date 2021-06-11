import React from "react";
import styled from "styled-components";
import DATA from "../../../data.json";

const BannerWrap = styled.div``;

const Banner = () => {
  const user = DATA.users[0];

  return (
    <BannerWrap>
      <div className="banner__profile">
        <img className="banner__profile--picture" src={user.picture} alt="" />
        <div className="banner__profile--name">{user.name}</div>
      </div>
      <div className="banner__contents">
        <div className="banner__contents--list">My Time</div>
        <div className="banner__contents--list">Rank</div>
        <div className="banner__contents--list">Profile</div>
      </div>
    </BannerWrap>
  );
};

export default Banner;
