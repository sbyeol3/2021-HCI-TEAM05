import React from "react";
import styled from "styled-components";
import DATA from "../../data.json";

const ProfileWrap = styled.div``;

const Profile = () => {
  const user = DATA.users[0];

  return (
    <ProfileWrap>
      <div className="main">
        <div className="main__title">Profile</div>
        <div className="main__box">
          <img src={user.picture} alt="" />
          <div className="main__box--desc">
            <div className="main__box--name">
              {user.name} (<span>{user.id}</span>)
            </div>
            <div className="main__box--intro">{user.desc}</div>
            <div className="main__box--type">
              Type <span>{user.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="git">
        <div className="git__title">My GitHub</div>
        <div className="git__box">
          <div className="git__box--profile">
            <div className="git__box--picture">{user.git.icon}</div>
            <div className="git__box--name">{user.git.nickname}</div>
          </div>
          <div className="git__box--status">
            <div className="git__box--graph">{user.git.graph}</div>
            <div className="git__box--repo">{user.git.repo}</div>
          </div>
        </div>
      </div>
    </ProfileWrap>
  );
};

export default Profile;
