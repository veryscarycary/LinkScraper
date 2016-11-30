import React from 'react';
import Input from './Input';
import DomainGraph from './DomainGraph';
import Histogram from './Histogram';

class Main extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="container">
        <h1>Domain Analyzer</h1>
        <Input />
        <div className="graphs">
          <DomainGraph />
          <Histogram />
        </div>
      </div>
    );
  }
};

export default Main;
