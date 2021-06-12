import { Route, BrowserRouter, Switch } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Rank from "./pages/Rank";
import Profile from "./pages/Profile";
import Banner from "./component/common/Banner";
import styled from "styled-components";

const AppWrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppWrap>
      <BrowserRouter>
        <Banner />
        <Switch>
          <Route exact path="/" component={Calendar} />
          <Route exact path="/rank" component={Rank} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </AppWrap>
  );
}

export default App;
