import { render } from '@testing-library/react';
import Forecast from '../components/Forecast';

jest.mock('react-redux');

describe('Test suite for forecast components', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render dashboard', () => {
    const obj = {
      dt: 1673042539,
      visibility: 10000,
      dt_txt: 'Fri, 06 Jan 2023 21:45:19 GMT',
      weather: [
        { icon: '10d' },
      ],
      main: {
        temp: 20,
        pressure: 1000,
        humidity: 95,
      },
    };
    const tree = render(<Forecast fc={obj} fahreinheit />);
    expect(tree).toMatchSnapshot();
  });
});
