//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { useState } from 'react';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeValue, homeSetValue] = useState(32);
  const [awayValue, awaySetValue] = useState(32);
  const [quarterValue, SetQuarter] = useState(1);

  const homeScoreBox = {
    teamName: 'home',
    touchDownHome: 7,
    fieldGoalHome: 3
  }
  const awayScoreBox = {
    teamName: 'away',
    touchDownAway: 7,
    fieldGoalAway: 3
  }

  const increaseQuarter = () => {
    
    homeValue === 100 || awayValue === 100 ? SetQuarter(quarterValue + 1) :

    SetQuarter(quarterValue)
      
 }

  const increaseTdScore = (props) => {

    if (props.teamName === 'home') {
      homeSetValue(homeValue + props.touchDownHome);

    }
    else {
      awaySetValue(awayValue + props.touchDownAway);
    }};

   const increaseFgScore = (props) => {

    if (props.teamName === 'home') {
      homeSetValue(homeValue + props.fieldGoalHome);

    }
    else {
      awaySetValue(awayValue + props.fieldGoalAway);
    }};

  // const homeFieldScore = () => {
  //   homeSetValue(homeValue + 3);
  // };

  // const homeTouchDownScore = () => {
  //   homeSetValue(homeValue + 7);
  // };

  // const awayFieldScore = () => {
  //   awaySetValue(awayValue + 3);
  // };

  // const awayTouchDownScore = () => {
  //   awaySetValue(awayValue + 7);
  // };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeValue}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => increaseTdScore(homeScoreBox)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => increaseFgScore(homeScoreBox)}>Home Field Goal</button>
        </div>
        <button className="awayButtons__touchdown" onClick={increaseQuarter}> Quarter <p>+</p></button>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => increaseTdScore(awayScoreBox)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => increaseFgScore(awayScoreBox)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
