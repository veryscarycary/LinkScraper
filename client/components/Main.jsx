import React from 'react';
import Input from './Input';
import Histogram from './Histogram';

class Main extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Domain Analyzer</h1>
        <Input />
        <Histogram />
      </div>
    );
  }
};

export default Main;
