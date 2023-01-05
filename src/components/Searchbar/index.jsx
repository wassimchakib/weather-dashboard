import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Searchbar.css';

const Searchbar = () => (
  <div className="dashboard__home">
    <form className="dashboard__bar">
      <input type="text" placeholder="Type City Name" name="city" />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  </div>
);

export default Searchbar;
