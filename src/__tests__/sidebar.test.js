import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Sidebar from '../components/Sidebar';

jest.mock('react-redux');

describe('Test suite for sidebar component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render sidebar', () => {
    const tree = render(
      <Router>
        <Sidebar />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
