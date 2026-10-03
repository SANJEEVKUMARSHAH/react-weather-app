import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

const InfoBox = ({ info }) => {

    let Init_Image =
        "https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?q=80&w=1170&auto=format&fit=crop";

    return (
        <div className='infobox'>

            <h1 className='weatherTitle'>
                WeatherInfo - {info.weather}
            </h1>

            <div className='weathercard'>

                <Card sx={{ width: 350 }}>

                    <CardMedia
                        sx={{ height: 140 }}
                        image={Init_Image}
                        title="Weather"
                    />

                    <CardContent>

                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {info.City.toUpperCase()}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                        >

                            <p>City : {info.City}</p>

                            <p>Temperature : {info.temp} °C</p>

                            <p>Pressure : {info.pressure}</p>

                            <p>Temp Max : {info.temp_max} °C</p>

                            <p>Temp Min : {info.temp_min} °C</p>

                            <p>Humidity : {info.humidity}%</p>

                            <p>Sea Level : {info.sea_level}</p>

                            <p>
                                Weather :
                                <strong> {info.weather}</strong>
                            </p>

                        </Typography>

                    </CardContent>

                </Card>

            </div>

        </div>
    );
};

export default InfoBox;