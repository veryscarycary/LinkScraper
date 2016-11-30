import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';

class Histogram extends React.Component {
  constructor() {
    super();

    this.state = {
      histogramData: []
    };

    this.debounceUpdate = _.debounce(this.debounceUpdate);
  }

  componentWillReceiveProps() {
    let context = this;
    this.setState({histogramData: this.props.histogramData});
    this.debounceUpdate();
  }

  debounceUpdate() {
    var context = this;

    var el = document.getElementById('chart')
    if (el) { el.parentNode.removeChild(el); }
    var parent = document.getElementById('chart_div');
    var child = document.createElement('div').setAttribute('id', 'chart');
    parent.appendChild(child);


    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(context.props.histogramData);

      var options = {
        title: 'Connected Domains',
        legend: { position: 'none' },
      };

      var chart = new google.visualization.Histogram(document.getElementById('chart'));
      chart.draw(data, options);
    };
  };

  render() {
    return(
      <div id='chart_div'>
        {this.state.histogramData.length > 1 ?
          <div id='chart'></div> : null}
      </div>
    );
  };
}

const mapStateToProps = function(store) {
  console.log(store, 'this is the store!');
  return {
    histogramData: store.histogramReducer.histogramData
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Histogram);
