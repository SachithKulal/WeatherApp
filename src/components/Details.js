import React from "react";
import "./Details.css";

const Details = (props) => {
  const imageUrl =
    "https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/01d.svg";
  const currentTime = new Date().toLocaleTimeString();
  return (
    <div className="container">
      <div className="container1">
        <div className="image">
          <img className="sunimg" src={imageUrl} alt="sun" />
        </div>
        <div className="content">
          <h1>
            {currentTime} {props.week}
          </h1>
          <h2>
            {props.city}
            <h3>Temparature {props.temp}</h3>
          </h2>
        </div>
      </div>
      <div className="container2">
        <div className="box">
          Temperature
          <h2>{props.temp}</h2>
        </div>
        <div className="box">
          Max Temp<h2>{props.max_temp}</h2>
        </div>
        <div className="box">
          Min Temp<h2>{props.min_temp}</h2>
        </div>
        <div className="box">
          Humidity<h2>{props.humidity}</h2>
        </div>
      </div>
    </div>
  );
};

export default Details;
