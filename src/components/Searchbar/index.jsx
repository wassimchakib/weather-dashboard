import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Searchbar.css';
// import API from '../../services/API';
import { getCity } from '../../redux/searchbar/searchbarSlice';

const Searchbar = () => {
  const dispatch = useDispatch();
  // const city = useSelector((state) => state.city);

  // const getCity = async (city) => {
  //   const result = await API.getLongitudeAndLatitude(city);
  //   return result[0];
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.children[0].value;
    dispatch(getCity(city));
    // getCity(city);
  };

  useEffect(() => {

  }, [dispatch]);

  return (
    <div className="dashboard__home">
      <form className="dashboard__bar" onSubmit={handleSubmit}>
        <input type="text" placeholder="Type City Name" name="city" />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
