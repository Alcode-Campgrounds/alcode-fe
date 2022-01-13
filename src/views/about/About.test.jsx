import React from 'react';
import { render } from '@testing-library/react';
import About from './About'


it('should render the about component', () => {
  const { container } = render( <About /> );

  expect(container).toMatchSnapshot();
});
