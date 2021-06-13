import React from "react";
import styled from "styled-components";
import DATA from "../data.json";

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  overflow-y: scroll;

  [class*="title"] {
    font-weight: bold;
    margin-left: 1rem;
  }

  .main {
    margin: 12rem 1rem 0 1rem;

    &__box {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 15px;
      border: solid 2px lightgray;
      display: flex;
      justify-content: center;
      align-items: center;

      &--type {
        color: #ff8513;

        span {
          margin-right: 1rem;
          color: black;
        }
      }

      &--desc {
        margin-left: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > * {
          margin: 0.2rem;
        }
      }

      &--name {
        font-weight: bold;
      }

      &--type {
        font-size: 0.8rem;

        span {
          font-weight: bold;
        }
      }

      &--intro {
        font-size: 0.8rem;
      }
    }
  }

  .git {
    margin: 1rem;

    &__box {
      margin-top: 1rem;
      padding: 2rem;
      border-radius: 15px;
      border: solid 2px lightgray;

      display: flex;
      justify-content: space-around;

      &--profile {
        display: flex;
        flex-direction: column;
        margin-right: 1rem;
      }

      &--name {
        margin: 1rem auto;
        font-weight: bold;
      }

      &--status {
        display: flex;
        flex-direction: column;
        img {
          width: 700px;
        }
      }
    }
  }
`;

const Profile = () => {
  const user = DATA.users[0];

  return (
    <ProfileWrap>
      <div className="main">
        <div className="main__title">Profile</div>
        <div className="main__box">
          <img
            className="main__box--picture"
            src={user.picture}
            alt=""
            style={{ width: "3rem", height: "3rem" }}
          />
          <div className="main__box--desc">
            <div className="main__box--name">
              {user.name} (<span>{user.id}</span>)
            </div>
            <div className="main__box--intro">{user.desc}</div>
            <div className="main__box--type">
              <span>Type</span> {user.type}
            </div>
          </div>
        </div>
      </div>
      <div className="git">
        <div className="git__title">My GitHub</div>
        <div className="git__box">
          <div className="git__box--profile">
            <img
              className="git__box--picture"
              src={user.git.icon}
              alt=""
              style={{ width: "4rem" }}
            />
            <div className="git__box--name" style={{ color: "gray" }}>
              {user.git.nickname}
            </div>
          </div>
          <div className="git__box--status">
            <img className="git__box--graph" src={user.git.graph} alt="" />
            <img className="git__box--repo" src={user.git.repo} alt="" />
          </div>
        </div>
      </div>
    </ProfileWrap>
  );
};

export default Profile;
