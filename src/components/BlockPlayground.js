import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";

import Block from './Block';

const Container = styled.div`
  margin: 0vh 10vw;
  height: 80vh;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;

export default class BlockPlayground extends Component {
  constructor() {
    super();
    this.state = {};
  };

  render() {
    return (
      <Container>
        <h1>The Block</h1>
        <h3>
          The most basic part of the Blockchain is <b>The Block</b>.
          Let's go through the components that are required to create a brand new Block, that will be sitting at the core of our blockchain.
        </h3>
        <button>Create The Block</button>
      </Container>
    );
  }
};
