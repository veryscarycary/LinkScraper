import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
import update from 'immutability-helper';

class Domain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: this.props.link,
      output: '../client/assets/loadingIcon.gif'
    };
  }

  componentWillMount() {
    this.props.getDomains(this).then((result) => {
      this.props.updateHistogram(update(this.props.histogramData, {$push: [[this.props.link, this.state.output.length]]}));
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.link}</td>
        <td>
          {!Array.isArray(this.state.output) ? <img className='loading' src={this.state.output} /> :
            (<select>
              {this.state.output.map((link) => (
                <option>{link}</option>
              ))}
            </select>)
          }
        </td>
      </tr>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Domain);
