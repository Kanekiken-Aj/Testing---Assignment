import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Router>
        <App />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});


// npm install --save-dev jest @testing-library/react @testing-library/jest-dom react-router-dom
