import React, { Component } from 'react';
import { getWeatherInfo } from './../API';
import Toast from './../components/Toast';

export default class WeatherApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            weather: {}
        }
    }

    handleChangeInput = async ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }
    
    searchApi = async () => {
        const { city } = this.state;
        const { data } = await getWeatherInfo(city);
        this.setState({ weather: data });
    }

    render() {
        const { city, weather } = this.state;
        return (
            <div>
                <input type="text" name="city" placeholder="Enter city name" onChange={this.handleChangeInput} value={city} />
                <button type="button" onClick={this.searchApi}>Search</button>
                <hr/>
                <Toast message='Toast Example' delay={3000} color="danger" />
                { weather && weather.current ? 
                    <div className="weather-info">
                        <h1>{weather.current.condition.text}</h1>
                        <img src={weather.current.condition.icon} alt=""/>
                        <h4>{weather.current.temp_c} °C</h4>
                    </div>
                    : <p>Not yet</p>
                }
            </div>
        );
    }
}