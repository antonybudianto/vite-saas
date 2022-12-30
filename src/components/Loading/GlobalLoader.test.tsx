import GlobalLoader from './GlobalLoader';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  render(<GlobalLoader />);
});
