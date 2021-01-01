import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Registration } from "./components/Registration";

import "./App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          <Switch>
            <Route path="/registration" component={Registration} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
