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

      </Container>
    );
  }
};
