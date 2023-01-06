import { PropTypes } from 'prop-types';
import { getHoursAndMinutes } from '../../utils/functions';
import './Forecast.css';

const Forecast = ({ fc }) => (
  <div className="forecast">
    <h3>
      <span className="forecast__time">{getHoursAndMinutes(fc.dt_txt)}</span>
      <span className="forecast__weather"><img src={`http://openweathermap.org/img/wn/${fc.weather[0].icon}@2x.png`} alt="forecast weather" /></span>
      <span className="forecast__temperature">{fc.main.temp}</span>
      <span className="forecast__pressure">{fc.main.pressure}</span>
      <span className="forecast__humidity">{fc.main.humidity}</span>
    </h3>
  </div>
);

Forecast.propTypes = {
  fc: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    visibility: PropTypes.number.isRequired,
    dt_txt: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default Forecast;
