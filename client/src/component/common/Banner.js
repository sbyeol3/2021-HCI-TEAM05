import React from "react";
import styled from "styled-components";
import DATA from "../../data.json";
import { withRouter } from "react-router-dom";

const Banner = ({ history }) => {
  const user = DATA.users[0];

  return (
    <BannerWrapper>
      <div className="banner">
        <div className="banner--profile">
          <img
            className="banner--profile__picture"
            src={user.picture}
            alt="profile"
          />
          <div className="banner--profile__name">{user.name}</div>
        </div>
        <div className="banner--contents">
          <div
            className="banner--contents__list"
            onClick={() => history.push("/")}
          >
            My Time
          </div>
          <div
            className="banner--contents__list"
            onClick={() => history.push("/rank")}
          >
            Rank
          </div>
          <div
            className="banner--contents__list"
            onClick={() => history.push("/profile")}
          >
            Profile
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default withRouter(Banner);

const BannerWrapper = styled.div`
  width: 300px;
  height: 100vh;
  min-height: 100%;
  background-color: #ff8513;

  .banner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &--profile {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__picture {
        width: 5rem;
        margin: 1rem;
      }

      &__name {
        display: flex;
        width: 100%;
        justify-content: center;
        font-weight: bold;
        font-size: 1.5rem;
      }
    }

    &--contents {
      margin: 3rem 1rem;

      &__list {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        font-weight: bold;

        &:hover {
          background-color: rgb(99.1%, 90.1%, 66.9%);
        }
      }
    }
  }
`;
