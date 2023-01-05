import { useState, useEffect } from 'react';
import './Dashboard.css';
import { faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { city } from '../../fakeData';
import getImageIcon from '../../utils/imageicons';
import { getDate } from '../../utils/functions';
import Searchbar from '../../components/Searchbar';
import Temperature from '../../components/Temperature.jsx';

const Dashboard = () => {
  const [dateNow, setdateNow] = useState(getDate());
  const [isFahreinheit, setisFahreinheit] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setdateNow(getDate());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section className="dashboard">
      <Searchbar />
      <div className="dashboard__content">
        <div className="dashboard__main">
          <img src={getImageIcon(city.weather[0].icon)} alt="Dusk" />
          {/* <h2 className="dashboard__temperature">
            {isFahreinheit ? (
              <>
                {city.main.temp}
                {' '}
                <sup className="fahreinheit">°F</sup>
              </>
            )
              : (
                <>
                  {fahreinheitToCelcius(city.main.temp)}
                  {' '}
                  <sup className="celcius">°C</sup>
                </>
              )}
          </h2> */}
          <Temperature isFahreinheit={isFahreinheit} temperature={city.main.temp} />
          <h2 className="dashboard__sunrise">
            <img src={getImageIcon('sunrise')} alt="sunrise" />
            {new Date(city.sys.sunrise).getHours()}
            :
            {new Date(city.sys.sunrise).getMinutes()}
            AM
          </h2>
          <h2 className="dashboard__sunset">
            <img src={getImageIcon('sunset')} alt="sunset" />
            {new Date(city.sys.sunset).getHours()}
            :
            {new Date(city.sys.sunset).getMinutes()}
            PM
          </h2>
          <div className="dashboard__conversion">
            <button className={isFahreinheit && 'active'} type="button" onClick={() => { setisFahreinheit(true); }}>°F</button>
            <button className={!isFahreinheit && 'active'} type="button" onClick={() => { setisFahreinheit(false); }}>°C</button>
          </div>

          <h2 className="dashboard__city">
            <FontAwesomeIcon icon={faLocationDot} />
            {city.name}
            {', '}
            {city.sys.country}
          </h2>

          <h2 className="dashboard__time">
            <FontAwesomeIcon icon={faCalendarDays} />
            {dateNow}
          </h2>
        </div>

        <div className="dashboard__forecast">
          5 days forecast
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
