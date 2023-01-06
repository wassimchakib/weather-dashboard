import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fahreinheitToCelcius, getCityName, getHoursAndMinutes } from '../../utils/functions';
import './Detail.css';

const Detail = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="detail">
      <Link className="detail__backbtn" to="../dashboard">
        {' '}
        <FontAwesomeIcon icon={faBackward} />
        {' '}
        Back
      </Link>
      <div className="detail__content">
        <h2>{getCityName(state)}</h2>
        <span>
          Temperature Now :
          {state.isFahreinheit ? `${state.main.temp}°F` : `${fahreinheitToCelcius(state.main.temp)}°C`}
        </span>
        <span>
          Minimum temperature :
          {state.isFahreinheit ? `${state.main.temp_min}°F` : `${fahreinheitToCelcius(state.main.temp_min)}°C`}
        </span>
        <span>
          Maximum temperature :
          {state.isFahreinheit ? `${state.main.temp_max}°F` : `${fahreinheitToCelcius(state.main.temp_max)}°C`}
        </span>
        <span>
          Pressure :
          {state.main.pressure}
          bar
        </span>
        <span>
          humidity :
          {state.main.humidity}
          %
        </span>
        <span>
          sea_level :
          {state.main.sea_level}
          feet
        </span>
        <span>
          ground_level :
          {state.main.grnd_level}
          feet
        </span>
        <span>
          visibility :
          {state.visibility}
          m
        </span>
        <span>
          wind :
          <h3>
            speed :
            {state.wind.speed}
          </h3>
          <h3>
            degree :
            {state.wind.deg}
          </h3>
          <h3>
            gust :
            {state.wind.gust}
          </h3>
        </span>
        <span>
          sunrise :
          {getHoursAndMinutes(state.sys.sunrise)}
        </span>
        <span>
          sunset :
          {getHoursAndMinutes(state.sys.sunset)}
        </span>
      </div>
    </div>
  );
};

Detail.propTypes = PropTypes.shape({
  city: PropTypes.string.isRequired,
}).isRequired;

export default Detail;
