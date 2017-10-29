import React, {PropTypes} from 'react';
// import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import Toolbar from './toolbar.jsx'
import LineGraph from './chart.jsx'
import SearchBar from './searchBar.jsx'
import 'react-datepicker/dist/react-datepicker.css';
import { updateStartDate, updateEndDate } from '../main/actions'
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
    return (
      <wholeContainer>
        <LeftCompartment>
            <SearchBar/>
            <DatePicker selected={this.props.start_moment} onChange={(e) => this.props.updateStartDate(e)}/>
            <DatePicker selected={this.props.end_moment} onChange={(e) => this.props.updateEndDate(e)}/>
            <h1>this is a test</h1>
            {this.props.symbol}
            {data2}
            <LineGraph data1={data2} labels={dates}/>

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
