import React from 'react';
import normalizeUrl from 'normalize-url';
import url from 'url';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';

import Output from './Output';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: null,
      depth: null,
      output: []
    };

    this.setInput = this.setInput.bind(this);
    this.setDepth = this.setDepth.bind(this);
    this.resetHistogramData = this.resetHistogramData.bind(this);
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

  resetHistogramData() {
    this.props.updateHistogram([]);
  }

  getDomains(context) {
    return fetch('/api/scrape', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: normalizeUrl(context.state.input),
        depth: context.state.depth
      })
    })
    .then(res => res.json())
    .then(json => {
      context.setState({
        output: json
      });
      return json;
    })
    .catch(err => console.log(err, 'There was an error getting the domains back!'));
  }

  submit(context) {
    this.resetHistogramData();
    this.getDomains(context);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="depth">Link Depth</label><input type="number" id="depth" min="0" onChange={this.setDepth} />
          <br />
          <input type="text" id="input" onChange={this.setInput} />
          <button type="button" onClick={()=>{this.submit(this)}}>Submit</button>
        </form>
        <Output output={this.state.output} getDomains={this.getDomains} />
      </div>
    );
  };
};

const mapStateToProps = function(store) {
  console.log(store, 'this is the store!');
  return {
    histogramData: store.histogramReducer.histogramData
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
