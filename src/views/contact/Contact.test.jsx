import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact'


it('should render the contact component', () => {
  const { container } = render( <Contact /> );

  expect(container).toMatchSnapshot();
});
