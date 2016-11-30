import React from 'react';
import Input from './Input';
import DomainGraph from './DomainGraph';

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
        </div>
      </div>
    );
  }
};

export default Main;
