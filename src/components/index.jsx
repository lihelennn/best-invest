import React, {PropTypes} from 'react';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Toolbar from './toolbar.jsx'
import LineGraph from './chart.jsx'
import SearchBar from './searchBar.jsx'
import SearchButton from './searchButton.jsx';
// import { makeSelectSymbol } from '../main/selectors';
import {getInfo, getOpen, getClose} from '../../static/api';

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
    return (<div>
            <SearchBar type='symbol'/>
            <SearchBar type='start_date'/>
            <SearchBar type='end_date'/>
            <SearchButton/>
            {'hello'}
            {this.props.symbol}

            <LineGraph data1={data1} labels={dates}/>

            <h2>Greetings, from Real Python!</h2>
            </div>);
  }
}

Index.propTypes = {
  symbol: PropTypes.string,
  st: PropTypes.object,
};

const mapStateToProps = (state) => ({
  st: state,
  symbol: state.get('symbol'),
});


export default connect(mapStateToProps, null)(Index);
