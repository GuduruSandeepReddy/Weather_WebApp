import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./infoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    let snow_url="https://images.unsplash.com/photo-1418985991508-e47386d96a71?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3d8ZW58MHx8MHx8fDA%3D"
  let hot_url ="https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/featured_images/sunny-sxc.jpg"
  let rain_url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqDOlKyyyH_R72pnYWokauTXqhVBrhtATqw&s"

    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}

        image = {info.temp > 25 ? hot_url :                // Hot condition
        info.temp < 0 ? snow_url :                // Snow condition
        (info.humidity > 70 ? rain_url : hot_url) }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      {info.city}{info.temp > 25 ?< WbSunnyIcon/>:                // Hot condition
        info.temp < 0 ?  <AcUnitIcon />:                // Snow condition
        (info.humidity > 70 ? <BeachAccessIcon/> : < WbSunnyIcon/>) }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' } } component={"span"}>
          <p>region = {info.region},{info.country}</p>
          <p>Temperature = {info.temp}&deg;C </p>
          <p>FeelsLike = {info.feelslike}&deg;C </p>
          <p>humidty = {info.humidity}</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}