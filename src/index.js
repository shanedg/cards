import React from 'react';
import ReactDOM from 'react-dom';

const title = 'app title';

ReactDOM.render(
  React.createElement(
    'h1',
    null,
    title,
  ),
  document.getElementById('root')
);
