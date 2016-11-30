var React = require('react');
import rd3 from 'rd3';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';

var BarChart1 = rd3.BarChart


class DomainGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      barData1: [
        {
          "name": "# Urls per Domain",
          "values": [{ "x": 0, "y": 0}]
        },
        {
          "name": "Domains",
          "values": [{ "x": 0, "y": 0}]
        }
      ]
    };

    this.debounceUpdate = _.debounce(this.debounceUpdate, 500);
  }

  debounceUpdate () {
    var barData1 = [
      {
        "name": "# Urls per Domain",
        "values": []
      },
      {
        "name": "Domains",
        "values": []
      }
    ];

    for (var i = 0; i < this.props.histogramData.length; i++) {
      barData1[0].values.push({ "x": i, "y": this.props.histogramData[i][1]});
      barData1[1].values.push({ "x": i, "y": 0});
    }
    console.log('HIIIII')
    this.setState({barData1}, ()=>{console.log(this.state.barData1)});
  }

  componentWillReceiveProps() {
    this.debounceUpdate();
  }

  render () {
    return  (
      <div>
      	<BarChart1
        data={this.state.barData1}
        width={400}
        height={400}
        title="Connected Domains"
        xAxisLabel="Domains"
        yAxisLabel="# Urls per Domain"
        />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DomainGraph);
