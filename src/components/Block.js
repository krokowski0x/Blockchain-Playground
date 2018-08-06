import React, { Component } from "react"
import styled from "styled-components";

const StyledSquare = styled.div`
  text-align: center;
  display: inline-block;
  padding: 1em;
  margin-right: 1em;
  margin-bottom: 1em;
  font-weight: bold;
  font-size: 1em;
  border-radius: 10px;
  background: transparent;
  color: black;
  border: 2px solid black;
`;

export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <StyledSquare>
        {`BLOCK
        Timestamp
        Hash
        Nonce
        Difficulty
        Data`}
      </StyledSquare>
    );
  }
};
