import React from "react";
import "./Header.css";
class Header extends React.Component {
  state = {
    brand: "OpenWeather",
    urlImg:
      "https://openweathermap.org/themes/openweathermap/assets/img/openweather-negative-logo-RGB.png",
    urlBrand: "#"
  };
  render() {
    return (
      <div className="row navbar">
        <div className="navbar-header col-*-3">
          <a
            href={this.state.urlBrand}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={this.state.urlImg} alt="openweather" />
          </a>
        </div>
        <div className="navbar-collapse">
          <ul className="menu">
            <li className="menu-item">
              <a href="/#">Weather</a>
            </li>
            <li className="menu-item">
              <a href="/#">Map</a>
            </li>
            <li className="menu-item">
              <a href="/#">API</a>
            </li>
            <li className="menu-item">
              <a href="/#">Widgets</a>
            </li>
            <li className="menu-item">
              <a href="/#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
