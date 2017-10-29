import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateSymbol, updateStartDate, updateEndDate } from '../main/actions';


export const SearchInput = styled.input`
  width: 100px,
`;


export class SearchBar extends React.PureComponent {
  render() {
      const that = this;
      if (this.props.type == 'symbol'){
        console.log(this.props.updateSymbol());
        return (<SearchInput onChange={function(e){that.props.updateSymbol(e.currentTarget.value)}}></SearchInput>);
      }
      if (this.props.type == 'start_date'){
        return (<SearchInput onChange={function(e){that.props.updateStartDate(e.currentTarget.value)}}></SearchInput>);
      }
      else{
        return (<SearchInput onChange={function(e){that.props.updateEndDate(e.currentTarget.value)}}></SearchInput>);
      }
    }
}

SearchBar.propTypes = {
  updateSymbol: PropTypes.func,
  type: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateSymbol: (symbol) => dispatch(updateSymbol(symbol)),
    updateStartDate: (start_date) => dispatch(updateStartDate(start_date)),
    updateEndDate: (end_date) => dispatch(updateEndDate(end_date)),

  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
