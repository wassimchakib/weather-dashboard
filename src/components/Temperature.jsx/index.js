import { PropTypes } from 'prop-types';
import { fahreinheitToCelcius } from '../../utils/functions';

const Temperature = ({ isFahreinheit, temperature }) => (
  <h2 className="dashboard__temperature">
    {isFahreinheit ? (
      <>
        {temperature}
        {' '}
        <sup className="fahreinheit">°F</sup>
      </>
    )
      : (
        <>
          {fahreinheitToCelcius(temperature)}
          {' '}
          <sup className="celcius">°C</sup>
        </>
      )}
  </h2>
);

Temperature.propTypes = {
  isFahreinheit: PropTypes.bool.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default Temperature;
