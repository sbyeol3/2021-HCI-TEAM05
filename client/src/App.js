import { useState, useEffect, useRef } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Today from "./pages/Today";
import Calendar from "./pages/Calendar";
import Rank from "./pages/Rank";
import Profile from "./pages/Profile";
import Record from "./component/Record";
import TimeRecorder from "./component/common/TimeRecorder";
import Banner from "./component/common/Banner";
import styled from "styled-components";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function intervalCallback() {
      savedCallback.current();
    }

    if (delay !== null) {
      const timer = setInterval(intervalCallback, delay);
      return () => clearInterval(timer);
    }
  }, [delay]);
}

function App() {
  const [todayTime, setTodayTime] = useState(0);
  const [status, setStatus] = useState(1);

  useInterval(
    () => {
      setTodayTime(todayTime + 1);
    },
    status === 1 ? 1000 : null
  );

  return (
    <Wrapper>
      <BrowserRouter>
        <Banner />
        <RightSide>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Today
                  {...props}
                  status={status}
                  setStatus={setStatus}
                  todayTime={todayTime}
                />
              )}
            />
            <Route exact path="/rank" component={Rank} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/month" component={Calendar} />
          </Switch>
          {status === 3 && <Record setStatus={setStatus} />}
          <TimeRecorder status={status} setStatus={setStatus} />
        </RightSide>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100%;
  height: 100vh;
`;

const RightSide = styled.div`
  width: calc(100vw - 300px);
`;
