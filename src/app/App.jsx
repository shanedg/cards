import React from 'react';

import Items from './components/items';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Items />
    );
  }
}
