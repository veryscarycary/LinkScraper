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

  render() {
    return (
      <div className="inner-container">
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

export default connect(mapStateToProps, mapDispatchToProps)(Output);
