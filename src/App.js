import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from 'react-bootstrap/Carousel'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from 'react-bootstrap/CardDeck';
import { css } from "@emotion/core";
import RiseLoader from "react-spinners/RiseLoader";
import Moment from 'react-moment';
import "./App.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;

function App() {
  const [weather, setWeather] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(showLocation => {
      getWeather(showLocation.coords.longitude, showLocation.coords.latitude);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getWeather = async (lon, lat) => {
    const api = "e768cc519587b9f68f740a8c273822d6";
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=Thanh pho Ho Chi Minh,VN&mode=xml,lat=${lat}&lon=${lon}&APPID=${api}&units=metric`
    );
    const data = await response.json();
    setWeather(data);
    console.log(data);
  };

  if (!weather) {
    return (
      <div className="sweet-loading">
        <RiseLoader
          css={override}
          sizeUnit={"px"}
          size={50}
          color={"#7FFF00"}
        />
      </div>
    );
  } else {
    return (
      <div className="main-content">
        <CardDeck style={{ width: '50rem' }}>
          <Card className="adjustCard">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title><Moment format="D MMM YYYY">{weather && weather.list[15].dt_txt}</Moment></Card.Title>
              <Card.Text><b>{weather && weather.list[15].main.temp_max}°</b> <small>{weather && weather.list[15].main.temp_min}°</small></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{weather && weather.list[15].weather[0].description}</small>
            </Card.Footer>
          </Card>
          <Card className="adjustCard">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title><Moment format="D MMM YYYY">{weather && weather.list[23].dt_txt}</Moment></Card.Title>
              <Card.Text><b>{weather && weather.list[23].main.temp_max}°</b> <small>{weather && weather.list[23].main.temp_min}°</small></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{weather && weather.list[23].weather[0].description}</small>
            </Card.Footer>
          </Card>
          <Card className="adjustCard">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title><Moment format="D MMM YYYY">{weather && weather.list[31].dt_txt}</Moment></Card.Title>
              <Card.Text><b>{weather && weather.list[31].main.temp_max}°</b> <small>{weather && weather.list[31].main.temp_min}°</small></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{weather && weather.list[31].weather[0].description}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <br></br>
        <CardDeck style={{ width: '50rem' }}>
          <Card className="adjustCard">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title><Moment format="LT" interval={30000}>{weather && weather.list[0].dt_txt}</Moment></Card.Title>
              <Card.Text><b>{weather && weather.list[0].main.temp_max}°</b> <small>{weather && weather.list[0].main.temp_min}°</small></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{weather && weather.list[0].weather[0].description}</small>
            </Card.Footer>
          </Card>
          <Card className="adjustCard">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title><Moment format="LT" interval={30000}>{weather && weather.list[1].dt_txt}</Moment></Card.Title>
              <Card.Text><b>{weather && weather.list[1].main.temp_max}°</b> <small>{weather && weather.list[1].main.temp_min}°</small></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{weather && weather.list[1].weather[0].description}</small>
            </Card.Footer>
          </Card>
          <Card className="adjustCard">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title><Moment format="LT" interval={30000}>{weather && weather.list[2].dt_txt}</Moment></Card.Title>
              <Card.Text><b>{weather && weather.list[2].main.temp_max}°</b> <small>{weather && weather.list[2].main.temp_min}°</small></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{weather && weather.list[2].weather[0].description}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default App;
