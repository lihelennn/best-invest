import React, {PropTypes} from 'react';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Toolbar from './toolbar.jsx'
import LineGraph from './chart.jsx'
import SearchBar from './searchBar.jsx'
import SearchButton from './searchButton.jsx';
// import { makeSelectSymbol } from '../main/selectors';

export class Index extends React.PureComponent {
  render() {
    console.log(this.props.st);
    return (<div>
            <SearchBar type='symbol'/>
            <SearchBar type='start_date'/>
            <SearchBar type='end_date'/>
            <SearchButton/>
            {'hello'}
            {this.props.symbol}
            <LineGraph data1={[0, 0, 80, 81, 56, 55, 40]} data2={[28, 48, 40, 19, 86, 27, 90]} labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}/>

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
