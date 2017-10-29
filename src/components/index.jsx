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
    let symbol_inputs = this.props.symbol._tail != undefined ? this.props.symbol._tail.array : this.props.symbol;
    const data1 = dates.map((date) => getOpen(date, sym));
    let data2 = [];
    let i = 0;
    let ii = 0;
    let current_stock = 0;
    for(i=0; i<dates.length; i++){
      current_stock = 0;
      for(ii=0; ii<symbol_inputs.length; ii++){
        current_stock += parseInt(getOpen(dates[i], symbol_inputs[ii]));
      }
      data2.push(current_stock);
    }
    return (<div>
            <SearchBar/>
            {this.props.symbol}
            {data2}
            <LineGraph data1={data2} labels={dates}/>

            <LineGraph data1={data1} labels={dates}/>
            </div>);
  }
}

Index.propTypes = {
  symbol: PropTypes.object,
};

const mapStateToProps = (state) => ({
  symbol: state.get('symbol'),
});


export default connect(mapStateToProps, null)(Index);
