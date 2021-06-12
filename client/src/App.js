import { Route, BrowserRouter, Switch } from "react-router-dom";
import Today from "./pages/Today";
import Calendar from "./pages/Calendar";
import Rank from "./pages/Rank";
import Profile from "./pages/Profile";
import Banner from "./component/common/Banner";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Banner />
        <RightSide>
          <Switch>
            <Route exact path="/" component={Today} />
            <Route exact path="/rank" component={Rank} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/month" component={Calendar} />
          </Switch>
        </RightSide>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const RightSide = styled.div`
  width: calc(100vw - 300px);
`;
