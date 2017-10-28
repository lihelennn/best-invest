import React from 'react';
import Toolbar from './toolbar.jsx'
import LineGraph from './chart.jsx'


export class Index extends React.PureComponent {
  render() {
    return (<div>
            <LineGraph />

            <h1>hi!</h1>
            <h2>Greetings, from Real Python!</h2>
            </div>);
  }
}

export default Index;
