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


export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  };

  render() {
    return (
      <Container>
        <h1>Blockchain Playground</h1>
        <h3>This app will help You undarstand basics of blockchain technology, as well as cryptocurrencies based on it. Let's dive in!</h3>
        <Block />
        <Block />
        <Block />
        <Block />
      </Container>
    );
  }
};
