import React from 'react';
import Toolbar from './toolbar.jsx'
import LeftComponent from './leftComponent.jsx'


export class Index extends React.PureComponent {
  render() {
    return (<div>
            <Toolbar/>
            <LeftComponent/>
            </div>);
  }
}

export default Index;
