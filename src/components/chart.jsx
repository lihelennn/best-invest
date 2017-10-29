import React, {PropTypes} from 'react';
import {Line as LineChart} from 'react-chartjs';

function chartData(labels_param, data1_param) {
  return {
    labels: labels_param,
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
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
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: false,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

const styles = {
  graphContainer: {
    border: '1px solid black',
    padding: '15px'
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
          width="600" height="250"/>
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
