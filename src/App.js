import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import WeatherLayout from "./components/WeatherLayout/WeatherLayout";
import { AppTitle } from "./components/AppTitle/AppTitle";
const API_KEY = "587b22a179e686349ea45a1e89040e3e";

class App extends React.Component {
  state = {
    location: {
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      error: undefined
    }
  };
  getWeatherInfo = async e => {
    e.preventDefault();
    // console.log(e.target);
    const city = e.target.city.value || "Ha Noi";
    const country = e.target.country.value || "Viet Nam";

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      const {
        name: resCity,
        main: { temp: resTemp, humidity: resHumidity },
        sys: { country: resCountry }
      } = data;
      const locationInfo = {
        city: resCity,
        country: resCountry,
        temperature: resTemp,
        humidity: resHumidity,
        error: undefined
      };
      this.setState({
        location: locationInfo
      });
    } else {
      this.setState({
        location: {
          city: undefined,
          country: undefined,
          temperature: undefined,
          humidity: undefined,
          error: "Please enter the value."
        }
      });
    }

    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-5 col-md-5 col-lg-5 title-container">
                  <AppTitle
                    title="Weather Finder"
                    subtitle="Find out temperature, humidity and more..."
                  />
                </div>
                <div className="col-xs-7 col-md-7 col-lg-7 form-container">
                  <Form getWeatherInfo={this.getWeatherInfo} />
                  <WeatherLayout location={this.state.location} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
