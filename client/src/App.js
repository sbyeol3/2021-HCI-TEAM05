import { Route, BrowserRouter, Switch } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Rank from "./pages/Rank";
import Profile from "./pages/Profile";
import Banner from "./component/common/Banner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Switch>
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/rank" component={Rank} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
