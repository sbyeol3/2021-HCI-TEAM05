import { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Today from "./pages/Today";
import Calendar from "./pages/Calendar";
import Rank from "./pages/Rank";
import Profile from "./pages/Profile";
import Record from "./component/Record";
import TimeRecorder from "./component/common/TimeRecorder";
import Banner from "./component/common/Banner";
import styled from "styled-components";

function App() {
  const [status, setStatus] = useState(1);

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
                <Today {...props} status={status} setStatus={setStatus} />
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
