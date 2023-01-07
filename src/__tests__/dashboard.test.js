import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import store from '../redux/store';

jest.mock('react-redux');

describe('Test suite for dashboard components', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render dashboard', () => {
    const tree = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
