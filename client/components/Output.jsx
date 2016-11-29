import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Domain from './Domain';
import Histogram from './Histogram';
import * as actionCreators from '../actions/index';

class Output extends React.Component {
  constructor(props) {
    super(props);

  }

  test() {
    this.props.updateHistogram('like whatev');
  }

  render() {
    return (
      <div>
        <table className="table-style">
          <tbody>
            <tr>
              <th>Domain</th>
              <th>List of Urls</th>
            </tr>
            {this.props.output.map((link) => (
              <Domain link={link}
                getDomains={this.props.getDomains}
              />
            ))}
          </tbody>
        </table>
        <button onClick={this.test.bind(this)}>TEST</button>
      </div>
    );
  };
};

const mapStateToProps = function(store) {
  console.log(store, 'this is the store!');
  return {
    currentUser: store.histogramReducer.histogramData
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Output);
