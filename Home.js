import React from "react";
import "./App.css";


function Home() {

const [homeValue, homeSetValue] = useState(32);

const homeFieldScore = () => {
  homeSetValue(homeValue + 3);
};

const homeTouchDownScore = () => {
  homeSetValue(homeValue + 7);
};



}