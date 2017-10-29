import React from 'react';
import styled from 'styled-components';


export const SearchInputButton = styled.button`

`;

export class SearchButton extends React.PureComponent {
  render() {
      return (<SearchInputButton>Go!</SearchInputButton>);
    }
}

export default SearchButton;
