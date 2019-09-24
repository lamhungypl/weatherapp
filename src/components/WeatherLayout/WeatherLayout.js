
import React from 'react';
import './WeatherLayout.css';
const WeatherLayout = (props) => {
    return (
        <div className="weather-layout">
            {
                props.location.city && props.location.country &&
                <p className="weather__key">City:
                    <span className="weather__value">{props.location.city}, {props.location.country}</span>
                </p>
            }
            {
                props.location.temperature &&
                <p className="weather__key">Temp:
                    <span className="weather__value">{props.location.temperature}</span>
                </p>
            }
            {
                props.location.humidity &&
                <p className="weather__key">Humidity:
                    <span className="weather__value">{props.location.humidity}</span>
                </p>
            }
            {
                props.location.error &&
                <p className="weather__key">Error:
                    <span className="weather__error">{props.location.error}</span>
                </p>
            }
        </div>
    );
}
export default WeatherLayout;