import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stage from "./components/Stage";
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";
import StageThree from "./components/StageThree";
import StageFour from "./components/StageFour";
import StageFive from "./components/StageFive";
import StageSix from "./components/StageSix";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/how-to-solve-the-rubiks-cube" component={Stage} />
        <Route exact path="/stage-one" component={StageOne} />
        <Route exact path="/stage-two" component={StageTwo} />
        <Route exact path="/stage-three" component={StageThree} />
        <Route exact path="/stage-four" component={StageFour} />
        <Route exact path="/stage-five" component={StageFive} />
        <Route exact path="/stage-six" component={StageSix} />
        <Redirect path="/" exact to="/how-to-solve-the-rubiks-cube" />
      </Switch>
    </>
  );
}

export default App;
