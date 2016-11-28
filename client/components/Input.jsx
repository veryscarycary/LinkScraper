import React from 'react';

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      input: null,
      depth: null
    };

    this.setInput = this.setInput.bind(this);
    this.setDepth = this.setDepth.bind(this);
  }

  setInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  setDepth(e) {
    this.setState({
      depth: e.target.value
    });
  }

  // on button submit, do a GET request and get the html back from the page
  // look for anchor tags and href attrs, it looks like react Link tags are converted to anchor tags

  render() {
    return (
      <form>
        <label htmlFor="depth">Link Depth</label><input type="number" id="depth" min="0" onChange={this.setDepth} />
        <br />
        <input type="text" id="input" onChange={this.setInput} />
      </form>
    );
  };
};

export default Input;
