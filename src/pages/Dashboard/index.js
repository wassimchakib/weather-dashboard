import './Dashboard.css';
import IconLogo from '../../assets/Lightning.svg';

const Dashboard = () => (
  <section className="dashboard">
    <div className="dashboard__home">
      <img src={IconLogo} alt="Icon logo" />
      <span className="dashboard__temperature">
        28
        <sup>°c</sup>
      </span>
    </div>
  </section>
);

export default Dashboard;
