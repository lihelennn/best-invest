import React from 'react';
import styled from 'styled-components';


export const Compartment = styled.div`
  background-color: blue;
`;

export class LeftCompartment extends React.PureComponent {
  render() {
      return (<Compartment>This is the toolbar</Compartment>);
    }
}

export default LeftComponent;
