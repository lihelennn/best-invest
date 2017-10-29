import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addSymbol } from '../main/actions';
export const SearchInput = styled.input`
  width: 100px,
`;

export class SearchBar extends React.PureComponent {
  updateSymbol(symbol){
    this.symbol = symbol;
  };

  render() {
    return(
      <div>
        <SearchInput onChange={(e) => this.updateSymbol(e.currentTarget.value)}></SearchInput>
        <button onClick={() => this.props.addSymbol(this.symbol)}>Add</button>
      </div>
    )}
}

SearchBar.propTypes = {
  updateSymbol: PropTypes.func,
  updateStartDate: PropTypes.func,
  updateEndDate: PropTypes.func,
  type: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addSymbol: (symbol) => dispatch(addSymbol(symbol)),
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
