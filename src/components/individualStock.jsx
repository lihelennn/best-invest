import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { buyShare } from '../main/actions';

export const StockContainer = styled.div`
  padding: 5px;
`;

export class IndividualStock extends React.PureComponent {
  render() {
    return(
      <div>
        <StockContainer>
          {this.props.symbol}
        </ StockContainer>
        <button onClick={() => this.props.buyShare(this.props.symbol)}> + </button>
      </div>
    )}
}

IndividualStock.propTypes = {
  symbol: PropTypes.string,
  buyShare: PropTypes.func,
};  

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    buyShare: (symbol) => dispatch(buyShare(symbol)),
  };
}

export default connect(null, mapDispatchToProps)(IndividualStock);