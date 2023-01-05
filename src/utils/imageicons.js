import clearDay from '../assets/clear_day.svg';
import clearNight from '../assets/clear_night.svg';
import cloudsDay from '../assets/few_clouds_day.svg';
import cloudsNight from '../assets/few_clouds_night.svg';
import cloudyDay from '../assets/cloudy_day.svg';
import cloudyNight from '../assets/cloudy_night.svg';
import thunderstorm from '../assets/thunderstorm.svg';
import snow from '../assets/snow.svg';
import sunnyRain from '../assets/sunny_rain.svg';
import rain from '../assets/rain.svg';
import sunrise from '../assets/sunrise.svg';
import sunset from '../assets/sunset.svg';

const images = {
  '01d': clearDay,
  '01n': clearNight,
  '02d': cloudsDay,
  '02n': cloudsNight,
  '04d': cloudyDay,
  '04n': cloudyNight,
  '09d': sunnyRain,
  '09n': rain,
  '10d': sunnyRain,
  '10n': rain,
  '11d': thunderstorm,
  '11n': thunderstorm,
  '13d': snow,
  '13n': snow,
  sunrise,
  sunset,
};

const getImageIcon = (icon) => images[icon];

export default getImageIcon;
