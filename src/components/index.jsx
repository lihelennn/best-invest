import React, {PropTypes} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import Toolbar from './toolbar.jsx'
import LineGraph from './chart.jsx'
import SearchBar from './searchBar.jsx'
import 'react-datepicker/dist/react-datepicker.css';
import { updateStartDate, updateEndDate } from '../main/actions'
import {getInfo, getOpen, getClose} from '../../static/api';

export class Index extends React.PureComponent {
  render() {
    const sym = "VOO";
    const dates = ["2017-08-16", "2017-09-22", "2017-10-16"];
    let data1 = []
    let i = 0;
    for(i=0; i<dates.length; i++){
      data1.push(getOpen(dates[i], sym));
    }

    console.log(this.props)
    return (<div>
      <SearchBar/>
      <DatePicker selected={this.props.start_moment} onChange={(e) => this.props.updateStartDate(e)}/>
      <DatePicker selected={this.props.end_moment} onChange={(e) => this.props.updateEndDate(e)}/>
      <LineGraph data1={data1} labels={dates}/>

      <h2>Greetings, from Real Python!</h2>
      </div>
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
