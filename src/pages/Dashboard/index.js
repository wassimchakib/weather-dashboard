/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';
import './Dashboard.css';
import { faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { city, forecast } from '../../fakeData';
import getImageIcon from '../../utils/imageicons';
import { getCityName, getDate, getHoursAndMinutes } from '../../utils/functions';
import Searchbar from '../../components/Searchbar';
import Temperature from '../../components/Temperature.jsx';
import Forecast from '../../components/Forecast';

const Dashboard = () => {
  const [dateNow, setdateNow] = useState(getDate());
  const [isFahreinheit, setisFahreinheit] = useState(true);
  const navigate = useNavigate();

  const handleClick = (city) => {
    navigate('/detail', { state: city });
  };

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
      style={{ background: 'linear-gradient(180deg, rgba(25, 27, 31, 1) 0%, rgba(62, 205, 224, 0.8) 100%), url(https://d2fg1aan4gy9m1.cloudfront.net/ert/images/352/Montecorone-Zocca-MO-veduta-ph.PrimoMasotti-TerrediCastelli-Facebook-CCBYNCSA.jpg)' }}
    >
      <Searchbar />
      <div className="dashboard__content">
        <Link
          className="dashboard__detail"
          to={{
            pathname: '/detail',
            state: city,
          }}
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
            <div className="dashboard__conversion">
              <button className={isFahreinheit && 'active'} type="button" onClick={() => { setisFahreinheit(true); }}>°F</button>
              <button className={!isFahreinheit && 'active'} type="button" onClick={() => { setisFahreinheit(false); }}>°C</button>
            </div>

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
            {forecast.list.length > 0
              ? forecast.list.map((fc) => <li key={fc.dt}><Forecast fc={fc} /></li>)
              : <li>No Forecast found</li>}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
