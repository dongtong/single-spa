import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import Parcel from "single-spa-react/parcel";
import { Module1 } from "./Module1";
import { Module2 } from "./Module2";
export default function Root(props) {
  return (
    <BrowserRouter basename="/react-01">
      <Parcel config={System.import("@dong/nav")}></Parcel>
      <hr />
      <div>
        <Link to="/module1">Module 1</Link>|<Link to="/module2">Module 2</Link>
      </div>
      <Switch>
        <Route path="/module1">
          <Module1 />
        </Route>
        <Route path="/module2">
          <Module2 />
        </Route>
        <Route path="/">
          <Redirect to="/module1" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
