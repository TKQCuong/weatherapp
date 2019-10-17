import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { css } from "@emotion/core";
import RiseLoader from "react-spinners/RiseLoader";
import Moment from "react-moment";
import "./App.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;

function App() {
  //carousel
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  //end carousel
  const [weather, setWeather] = useState(null);
  const [weatherBonus, setWeatherBonus] = useState(null);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(showLocation => {
      getWeather(showLocation.coords.longitude, showLocation.coords.latitude);
      getWeatherBonus(showLocation.coords.longitude, showLocation.coords.latitude);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getWeather = async (lon, lat) => {
    const api = "e768cc519587b9f68f740a8c273822d6";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Thanh pho Ho Chi Minh,VN&mode=xml,lat=${lat}&lon=${lon}&APPID=${api}&units=metric`
    );
    const data = await response.json();
    setWeather(data);
    console.log(data);
  };

  const getWeatherBonus = async (lon, lat) => {
    const api = "e768cc519587b9f68f740a8c273822d6";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Ha Noi,VN&mode=xml,lat=${lat}&lon=${lon}&APPID=${api}&units=metric`
    );
    const data = await response.json();
    setWeatherBonus(data);
    console.log(data);
  };
  
  if (!weather) {
    return (
      <div className="sweet-loading">
        <RiseLoader
          css={override}
          sizeUnit={"px"}
          size={30}
          color={"grey"}
        />
      </div>
    );
  } else {
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <div className="main-content">
            <h1 className="hcm">HO CHI MINH CITY, VN</h1>
            <CardDeck style={{ width: "50rem" }}>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="D MMM YYYY">
                      {weather && weather.list[6].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weather && weather.list[6].main.temp_max}°</b>{" "}
                    <small>{weather && weather.list[6].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weather && weather.list[6].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="D MMM YYYY">
                      {weather && weather.list[12].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weather && weather.list[12].main.temp_max}°</b>{" "}
                    <small>{weather && weather.list[12].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weather && weather.list[12].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="D MMM YYYY">
                      {weather && weather.list[22].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weather && weather.list[22].main.temp_max}°</b>{" "}
                    <small>{weather && weather.list[22].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weather && weather.list[22].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
            </CardDeck>
            <br></br>
            <CardDeck style={{ width: "50rem" }}>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="LT" interval={30000}>
                      {weather && weather.list[4].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weather && weather.list[4].main.temp_max}°</b>{" "}
                    <small>{weather && weather.list[4].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weather && weather.list[4].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="LT" interval={30000}>
                      {weather && weather.list[5].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weather && weather.list[5].main.temp_max}°</b>{" "}
                    <small>{weather && weather.list[5].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weather && weather.list[5].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="LT" interval={30000}>
                      {weather && weather.list[6].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weather && weather.list[6].main.temp_max}°</b>{" "}
                    <small>{weather && weather.list[6].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weather && weather.list[6].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="main-content">
            <h1 className="hanoi">HA NOI CITY, VN</h1>
            <CardDeck style={{ width: "50rem" }}>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="D MMM YYYY">
                      {weatherBonus && weatherBonus.list[6].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weatherBonus && weatherBonus.list[6].main.temp_max}°</b>{" "}
                    <small>{weatherBonus && weatherBonus.list[6].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weatherBonus && weatherBonus.list[6].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="D MMM YYYY">
                      {weatherBonus && weatherBonus.list[12].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weatherBonus && weatherBonus.list[12].main.temp_max}°</b>{" "}
                    <small>{weatherBonus && weatherBonus.list[12].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weatherBonus && weatherBonus.list[12].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="D MMM YYYY">
                      {weatherBonus && weatherBonus.list[22].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weatherBonus && weatherBonus.list[22].main.temp_max}°</b>{" "}
                    <small>{weatherBonus && weatherBonus.list[22].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weatherBonus && weatherBonus.list[22].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
            </CardDeck>
            <br></br>
            <CardDeck style={{ width: "50rem" }}>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="LT" interval={30000}>
                      {weatherBonus && weatherBonus.list[7].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weatherBonus && weatherBonus.list[7].main.temp_max}°</b>{" "}
                    <small>{weatherBonus && weatherBonus.list[7].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weatherBonus && weatherBonus.list[7].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="LT" interval={30000}>
                      {weatherBonus && weatherBonus.list[8].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weatherBonus && weatherBonus.list[8].main.temp_max}°</b>{" "}
                    <small>{weatherBonus && weatherBonus.list[8].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weatherBonus && weatherBonus.list[8].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
              <Card className="adjustCard">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>
                    <Moment format="LT" interval={30000}>
                      {weatherBonus && weatherBonus.list[9].dt_txt}
                    </Moment>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <b>{weatherBonus && weatherBonus.list[9].main.temp_max}°</b>{" "}
                    <small>{weatherBonus && weatherBonus.list[9].main.temp_min}°</small>
                  </Card.Text>
                  <Card.Text className="max-min">Max Min</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {weatherBonus && weatherBonus.list[9].weather[0].description}
                  </small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
        </Carousel.Item>
      </Carousel>

    );
  }
}

export default App;
