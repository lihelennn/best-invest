import React from 'react';
import Toolbar from './toolbar.jsx'


export class Index extends React.PureComponent {
  render() {
    return (<div>
            <Toolbar/>
            <h1>hi!</h1>
            <h2>Greetings, from Real Python!</h2>
            </div>);
  }
}

export default Index;
