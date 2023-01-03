import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTemperatureFull,
  faUser,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import IconImg from '../../assets/Lightning.svg';

const Sidebar = () => {
  const [width, setwidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setwidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <nav className="sidebar">
      <h1 className="sidebar__title">
        <img className="sidebar__icon" src={IconImg} alt="logo" />
        {width > 768 && <span>Weather App</span>}
      </h1>
      <ul className="sidebar__nav">
        <li>
          <NavLink to="dashboard">
            <FontAwesomeIcon icon={faTemperatureFull} />
            {width > 768 && <span>Dashboard</span>}
          </NavLink>
        </li>
        <li>
          <NavLink to="pollution">
            <FontAwesomeIcon icon={faWind} />
            {width > 768 && <span>Air Pollution</span>}
          </NavLink>
        </li>
        <li>
          <NavLink to="contact">
            <FontAwesomeIcon icon={faUser} />
            {width > 768 && <span>Contact</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
