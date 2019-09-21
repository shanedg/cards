import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = 'app title';

    return (
      <h1>{title}</h1>
    );
  }
}
