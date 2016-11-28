import React from 'react';
import Input from './Input';

class Main extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Domain Analyzer</h1>
        <Input />
        <div id="html"></div>
      </div>
    );
  }
};

export default Main;
