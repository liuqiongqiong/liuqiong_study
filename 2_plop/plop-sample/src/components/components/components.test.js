import React from 'react';
import ReactDOM from 'react-dom';
import components from './components';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<components />, div);
  ReactDOM.unmountComponentAtNode(div);
});
