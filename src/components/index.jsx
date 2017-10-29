import React, {PropTypes} from 'react';
// import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { connect } from 'react-redux';
import Toolbar from './toolbar.jsx'
import LineGraph from './chart.jsx'
import SearchBar from './searchBar.jsx'
import SearchButton from './searchButton.jsx';
// import { makeSelectSymbol } from '../main/selectors';
import {getInfo, getOpen, getClose} from '../../static/api';

export const wholeContainer = styled.div`
  margin: 0; padding: 0; height: 100%;
  background-color: #2c3e50;
`;
export const LeftCompartment = styled.div`
  position: absolute; left: 0; height: 100%; width: 50%;
`;
export const RightCompartment = styled.div`
  position: absolute; right: 0; height: 100%; width: 50%;
`;


export class Index extends React.PureComponent {
  render() {
    const sym = "VOO";
    const dates = ["2017-08-16", "2017-09-22", "2017-10-16"];
    let data1 = []
    let i = 0;
    for(i=0; i<dates.length; i++){
      console.log(dates[i]);
      console.log(getOpen(dates[i], sym));
      data1.push(getOpen(dates[i], sym));
    }
    return (
      <wholeContainer>
        <LeftCompartment>
            <SearchBar/>
            <h1>this is a test</h1>
            {this.props.symbol}
            <LineGraph data1={data1} labels={dates}/>
        </ LeftCompartment>
        <RightCompartment>
            <h2>Greetings, from Real Python!</h2>
        </ RightCompartment>
      </ wholeContainer>
    );
  }
}

Index.propTypes = {
  symbol: PropTypes.object,
};

const mapStateToProps = (state) => ({
  symbol: state.get('symbol'),
});


export default connect(mapStateToProps, null)(Index);
