import React, {PropTypes} from 'react';
// import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import Toolbar from './toolbar.jsx'
import LineGraph from './chart.jsx'
import SearchBar from './searchBar.jsx'
import IndividualStock from './individualStock.jsx'
import 'react-datepicker/dist/react-datepicker.css';
import { updateStartDate, updateEndDate } from '../main/actions'
import {getInfo, getOpen, getClose} from '../../static/api';



export const WholeContainer = styled.div`
  margin: 0; padding: 0; height: 100%;
  top:0; left:0;
  width: 100%;
  text-align: center;
`;
export const LeftCompartment = styled.div`
  position: absolute; left: 0; height:70%; width: 50%;
  border-right: 1px solid white;
  text-align: center;
`;
export const RightCompartment = styled.div`
  position: absolute; right: 0; height:70%; width: 50%;
  text-align: center;
`;

export class Index extends React.PureComponent {
  getInBetweenDatesArray(start, end) {
    let arr = []
    var day = 1000*60*60*24;
    const date1 = new Date(start);
    const date2 = new Date(end);

    var diff = (date2.getTime()- date1.getTime())/day;
    for(var i=0;i<=diff; i++) {
      var xx = date1.getTime()+day*i;
      var yy = new Date(xx);
      arr.push(yy.getFullYear()+"-"+(yy.getMonth()+1)+"-"+yy.getDate());
    }
    return arr;
  }

  render() {
    const sym = "VOO";
    const start_moment = this.props.start_moment.format();
    const end_moment = this.props.end_moment.format();
    // let start_date = "2017-10-01";
    // let end_date = "2017-10-03";
    // const dates = this.getInBetweenDatesArray(start_date, end_date);
    let api_data = getInfo(sym);
    let start_date = start_moment.substring(0,start_moment.indexOf('T'));
    let end_date = end_moment.substring(0,start_moment.indexOf('T'));
    const dates = this.getInBetweenDatesArray(start_date, end_date);
    const data1 = dates.map((date) => getOpen(date, sym, api_data));
    let data2 = [];
    let i = 0;
    let ii = 0;
    let current_stock = 0;
    let current_stock_list = [];
    var symbol = this.props.symbol

    let total_individual_stocks = 0;

    for(i=0; i<dates.length; i++){
      current_stock = 0;
      symbol.map(
      (value, key) => {
        api_data = getInfo(key);
        if(api_data !== undefined){
          current_stock += value * parseInt(getOpen(dates[i], key, api_data));
        }else{
          current_stock = current_stock_list[current_stock_list.length-1];
        }
      })
      data2.push(current_stock);
      current_stock_list.push(current_stock);


      total_individual_stocks += current_stock;

    }

    const total_shares = data2[0]/data1[0];
    // let total_index_stocks = 0;
    const new_data1 = data1.map((num) => num*total_shares);

    const new_data1_delta = ((new_data1[new_data1.length-1] - new_data1[0])/(new_data1[0])*100).toFixed(4);
    const data2_delta = ((data2[data2.length-1] - data2[0])/(data2[0])*100).toFixed(4);

    // const percentage = total_index_stocks/total_individual_stocks;

    var listItems = []
    symbol.map(
      (value, key) => {
        listItems.push(<IndividualStock key={key} symbol={key}/>)
      }
    )
    return (
      <WholeContainer>
        <SearchBar/>
        Start date:
        <DatePicker selected={this.props.start_moment} onChange={(e) => this.props.updateStartDate(e)}/>
        End date:
        <DatePicker selected={this.props.end_moment} onChange={(e) => this.props.updateEndDate(e)}/>
        <h1>this is a test</h1>
        <LeftCompartment>
          <h2>Index Portfolio Stocks</h2>
          <h4>{new_data1_delta}%</h4>
            <LineGraph data1={new_data1} labels={dates}/>
        </ LeftCompartment>
        <RightCompartment>
          <h2>Individual Stocks</h2>
          <h4>{data2_delta}%</h4>
          <LineGraph data1={data2} labels={dates}/>
          {listItems}
        </ RightCompartment>
      </ WholeContainer>
    );
  }
}

Index.propTypes = {
  symbol: PropTypes.object,
  start_moment: PropTypes.object,
  updateStartDate: PropTypes.func,
  end_moment: PropTypes.object,
  updateEndDate: PropTypes.func,
};

const mapStateToProps = (state) => ({
  symbol: state.get('symbol'),
  start_moment: state.get('start_moment'),
  end_moment: state.get('end_moment')
});

const mapDispatchToProps = (dispatch) =>({
  updateStartDate: (date) => dispatch(updateStartDate(date)),
  updateEndDate: (date) => dispatch(updateEndDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
