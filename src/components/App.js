import React, { Component } from "react";
import Details from "./Details";
import Searchbar from "./Searchbar";
import backgroundImage from "./images/cloud.jpg";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      week: null,
      temp: 0,
      max_temp: 0,
      min_temp: 0,
      humidity: 0,
      date: null,
    };

    this.api = this.api.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  api = async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`
    );
    console.log(response.data.list);

    let arrayOfObjects = response.data.list;
    const getTimeDifference = (date) => Math.abs(new Date(date) - new Date());

    const closestObject = arrayOfObjects.reduce((prev, curr) =>
      getTimeDifference(curr.dt_txt) < getTimeDifference(prev.dt_txt)
        ? curr
        : prev
    );
    const currentDateObject = new Date();

    const currentTime = currentDateObject.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const currentDayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(currentDateObject);

    this.setState({
      city: response.data.city.name,
      country: response.data.city.country,
      temp: closestObject.main.temp - 273.15,
      max_temp: closestObject.main.temp_max - 273.15,
      min_temp: closestObject.main.temp_min - 273.15,
      humidity: closestObject.main.humidity,
      week: currentDayOfWeek,
      date: currentTime,
    });
  };

  searchHandler = (city) => {
    this.api(city);
  };

  render() {
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    };

    return (
      <div style={backgroundStyle}>
        <Searchbar onSearch={this.searchHandler} />
        <Details
          city={this.state.city}
          country={this.state.country}
          week={this.state.week}
          temp={this.state.temp}
          max_temp={this.state.max_temp}
          min_temp={this.state.min_temp}
          humidity={this.state.humidity}
        />
      </div>
    );
  }
}

export default App;
