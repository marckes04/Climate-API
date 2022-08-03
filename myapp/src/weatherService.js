import { IconBase } from "react-icons/lib";

const API_KEY = API_KEYNumber;

const makeIconURL = (IconId) => `https://openweathermap.org/img/wn/
${IconId}@2x.png`

const getFormattedWatherData = async(city, units = 'metric') =>{

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=${units}`

    const data = await fetch(URL)
    .then((res)=> res.json())
    .then((data) => data);

    const {weather, main: {temp, feels_like,temp_min,temp_max,
    pressure,humidity},
    wind: {speed},
    sys: {country},
    name,
} = data;

const {description,icon} = weather[0]

return {
description, 
iconURL: makeIconURL(icon),
temp,
feels_like, 
temp_min, 
temp_max, 
pressure,
humidity,
speed,
country,
name,
};

};

export {getFormattedWatherData};