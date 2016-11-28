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
    this.getHTMLpage = this.getHTMLpage.bind(this);
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

  // need to post url to backend to do the work
  // also might need to include same-origin header to pass it to backend
  getHTMLpage() {
    return fetch('/api/scrape', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: this.state.input
      })
    })
    .then(res => res.json())
    .catch(err => console.log(err, 'There was an error getting the tickets!'));
    // const myHeaders = new Headers({
    //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT',
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // });
    //
    // const myInit = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   mode: 'cors',
    //   cache: 'default'
    // };
    //
    // return fetch(this.state.input, myInit)
    // .then(res => {
    //   alert(res);
    //   // var div = document.createElement("div");
    //   // var content = document.createTextNode(res);
    //   // div.appendChild(child);
    //   // document.body.appendChild(div);
    // })
    // .catch(err => console.log(err, 'There was an error getting the page!'));
  }

  // on button submit, do a GET request and get the html back from the page
  // look for anchor tags and href attrs, it looks like react Link tags are converted to anchor tags

  render() {
    return (
      <form>
        <label htmlFor="depth">Link Depth</label><input type="number" id="depth" min="0" onChange={this.setDepth} />
        <br />
        <input type="text" id="input" onChange={this.setInput} />
        <button type="button" onClick={this.getHTMLpage}>Submit</button>
      </form>
    );
  };
};

export default Input;
