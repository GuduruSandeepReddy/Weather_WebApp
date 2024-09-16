import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./infoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  let snow_url =
    "https://images.unsplash.com/photo-1418985991508-e47386d96a71?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3d8ZW58MHx8MHx8fDA%3D";
  let hot_url =
    "https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/featured_images/sunny-sxc.jpg";
  let rain_url =
    "https://storage.needpix.com/rsynced_images/rain-3411982_1280.jpg";
  return (
    <div className="InfoBo">
      <div className="Img">
        {
          <img
            src={
              info.temp > 25
                ? hot_url // Hot condition
                : info.temp < 0
                ? snow_url // Snow condition
                : info.humidity > 70
                ? rain_url
                : hot_url
            }
          ></img>
        }
      </div>
      <div className="Details">
      <p className="City">{info.city} {info.temp > 25 ? (
            <WbSunnyIcon /> // Hot condition
          ) : info.temp < 0 ? (
            <i class="fa-regular fa-snowflake"></i>
          ) : info.humidity > 70 ? (
            <i className="fa-solid fa-cloud-rain"></i>
          ) : (
            <WbSunnyIcon />
          )}
         </p>
 <div className="Flex">
          <p className="item">
            region <b>{info.region},{info.country}</b>
          </p>
          <p className="item">Temperature <b>{info.temp}&deg;C </b></p>
          <p className="item">FeelsLike <b>{info.feelslike}&deg;C </b></p>
          <p className="item">humidty <b>{info.humidity}</b></p>
        </div>
      </div>
    </div>
  );
}
