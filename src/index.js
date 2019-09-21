import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

ReactDOM.render(
  React.createElement(
    App,
    null,
  ),
  document.getElementById('root')
);

// TODO: check if mode is development
module.hot.accept();
