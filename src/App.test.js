/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './pages/routes/routes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router />, div);
  ReactDOM.unmountComponentAtNode(div);
});
