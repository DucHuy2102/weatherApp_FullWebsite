import { DateTime } from 'luxon';

const API_KEY = 'cf7a36577c27525b0dbb0704523cde66';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(`${BASE_URL}/${infoType}`);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
    return fetch(url).then((res) => res.json());
};

const formatData = (data) => {
    const {
        coord: { lon, lat },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
    };
};

const formatForecastWeather = (data) => {
    let { timezone, hourly, daily } = data;
    console.log('-->', data);
    // daily = daily.slice(1, 6).map((d) => {
    //     return {
    //         title: formatLocalTime(d.dt, timezone, 'cccc'),
    //         temp: d.temp.day,
    //         icon: d.weather[0].icon,
    //     };
    // });
    // hourly = hourly.slice(1, 6).map((d) => {
    //     return {
    //         title: formatLocalTime(d.dt, timezone, 'hh:mm a'),
    //         temp: d.temp.day,
    //         icon: d.weather[0].icon,
    //     };
    // });
    return { daily, hourly, timezone };
};

const getData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatData);
    const { lat, lon } = formattedCurrentWeather;
    const forecastWeather = await getWeatherData('onecall', {
        lat,
        lon,
        exclude: 'current,minuitely,alerts',
        units: searchParams.units,
    }).then(formatForecastWeather);
    return { ...formattedCurrentWeather, ...forecastWeather };
};

const formatLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getData;
