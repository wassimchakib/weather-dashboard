import { Link } from 'react-router-dom';

const Detail = () => (
  <>
    <Link to="../dashboard">Back</Link>
    <h2>City Name</h2>
    <span>Temperature Now</span>
    <span>Minimum temperature</span>
    <span>Maximum temperature</span>
    <span>Pressure</span>
    <span>humidity</span>
    <span>sea_level</span>
    <span>ground_level</span>
    <span>visibility</span>
    <span>wind : speed + degree + gust</span>
    <span>sunrise</span>
    <span>sunset</span>

  </>
);

export default Detail;
