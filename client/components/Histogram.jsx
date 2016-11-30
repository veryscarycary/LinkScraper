import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';

class Histogram extends React.Component {
  constructor() {
    super();

  }

  componentDidMount() {
    let context = this;
    setTimeout(() => {
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(context.props.histogramData);

        var options = {
          title: 'Domains connected to ',
          legend: { position: 'none' },
        };

        var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    }, 3000);
  }

  render() {
    return(
      <div id='chart_div'></div>
    );
  }
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
