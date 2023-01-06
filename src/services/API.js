export default class API {
  static getWeatherToday = async (latitude, longitude) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`;
    return fetch(API_URL).then((data) => data.json()).then((result) => result);
  };

  static getForecastToday = async (latitude, longitude) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`;

    return fetch(API_URL).then((data) => data.json()).then((result) => result);
  }

  static getLongitudeAndLatitude = async (cityName) => {
    const API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${process.env.REACT_APP_API_KEY}`;
    const city = await fetch(API_URL)
      .then((data) => data.json())
      .then((result) => ({ lon: result[0].lon, lat: result[0].lat }));
    const weather = await this.getWeatherToday(city.lat, city.lon);
    const forecast = await this.getForecastToday(city.lat, city.lon);
    return { ...weather, forecast, img_url: `https://source.unsplash.com/random/1920%C3%971080/?${cityName}` };
  }
}
