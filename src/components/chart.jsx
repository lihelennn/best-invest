import React, {PropTypes} from 'react';
import {Line as LineChart} from 'react-chartjs';

function chartData(labels_param, data1_param) {
  return {
    labels: labels_param,
    datasets: [
      {
        label: 'My First dataset',
        fontColor: '#fff',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(46, 204, 113,1.0)',
        pointColor: 'rgba(46, 204, 113,1.0)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: data1_param,
      },
    ]
  }
}

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(255,255,255,1)',
  scaleGridLineWidth: 0.5,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: false,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 5,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legend: {
    display: true,
    labels: {
      fontColor: '#fff',

    }
  }
}

const styles = {
  graphContainer: {
    padding: '10px'
  }
}

class LineGraph extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      labels: this.props.labels,
      data1: this.props.data1,
      data: chartData(this.props.labels, this.props.data1)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.labels !== nextProps.labels || this.state.data1 !== nextProps.data1) {
      this.setState({
        data: chartData(nextProps.labels, nextProps.data1)
      });
    }
}

  render() {
    return (
      <div style={styles.graphContainer}>
        <LineChart data={this.state.data}
          options={options}
          width="500" height="300"/>
      </div>
    )
  }
}

LineGraph.propTypes = {
  data1: PropTypes.array,
  data2: PropTypes.array,
  labels: PropTypes.array,
};

export default LineGraph;
