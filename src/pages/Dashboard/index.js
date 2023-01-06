/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';
import './Dashboard.css';
import { faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getImageIcon from '../../utils/imageicons';
import { getCityName, getDate, getHoursAndMinutes } from '../../utils/functions';
import Searchbar from '../../components/Searchbar';
import Temperature from '../../components/Temperature.jsx';
import Forecast from '../../components/Forecast';

const Dashboard = () => {
  const [dateNow, setdateNow] = useState('');
  const [isFahreinheit, setisFahreinheit] = useState(true);
  const city = useSelector((state) => state.city.city);

  getHoursAndMinutes(city.sys.sunrise);
  useEffect(() => {
    const interval = setInterval(() => {
      setdateNow(getDate());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section
      className="dashboard"
      style={{ background: `linear-gradient(180deg, rgba(25, 27, 31, 1) 0%, rgba(62, 205, 224, 0.8) 100%), url(${city.img_url}) no-repeat` }}
    >
      <Searchbar />
      <div className="dashboard__content">
        <Link
          className="dashboard__detail"
          to={{
            pathname: '/detail',
            search: `city=${'london'}`,
          }}
          state={{ ...city, isFahreinheit }}
        >
          <div className="dashboard__main">
            <img src={getImageIcon(city.weather[0].icon)} alt="Dusk" />
            <Temperature isFahreinheit={isFahreinheit} temperature={city.main.temp} />
            <h2 className="dashboard__sunrise">
              <img src={getImageIcon('sunrise')} alt="sunrise" />
              {getHoursAndMinutes(city.sys.sunrise)}
            </h2>
            <h2 className="dashboard__sunset">
              <img src={getImageIcon('sunset')} alt="sunset" />
              {getHoursAndMinutes(city.sys.sunset)}
            </h2>
            <form className="dashboard__conversion">
              <button
                className={isFahreinheit ? 'active' : undefined}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setisFahreinheit(true);
                }}
              >
                °F

              </button>
              <button
                className={!isFahreinheit ? 'active' : undefined}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setisFahreinheit(false);
                }}
              >
                °C

              </button>
            </form>

            <h2 className="dashboard__city">
              <FontAwesomeIcon icon={faLocationDot} />
              {getCityName(city)}
            </h2>

            <h2 className="dashboard__time">
              <FontAwesomeIcon icon={faCalendarDays} />
              {dateNow}
            </h2>
          </div>
        </Link>

        {/* Forecast  */}
        <div className="dashboard__forecast">
          <ul>
            {city.forecast.list.length > 0
              ? city.forecast.list.slice(0, 4)
                .map((fc) => <li key={fc.dt}><Forecast fc={fc} fahreinheit={isFahreinheit} /></li>)
              : <li>No Forecast found</li>}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
