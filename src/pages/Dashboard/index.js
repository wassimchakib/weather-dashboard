import './Dashboard.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => (
  <section className="dashboard">
    <div className="dashboard__home">
      <form className="dashboard__bar">
        <input type="text" placeholder="Type City Name" name="city" />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>

      </form>
    </div>
  </section>
);

export default Dashboard;
