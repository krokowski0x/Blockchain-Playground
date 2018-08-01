import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 2 }
});

const StyledSquare = styled(Square)`
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
    this.state = {
      hovering: false,
    };
  };

  render() {
    return (
      <StyledSquare
        pose={this.state.hovering ? "hovered" : "idle"}
        onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: false })}
      > {`BLOCK
        Timestamp
        Hash
        Nonce
        Difficulty
        Data`}
      </StyledSquare>
    );
  }
};
