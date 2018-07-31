import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});

const StyledSquare = styled(Square)`
  width: 100px;
  height: 100px;
  background: red;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
  };

  render() {
    return (
      <Container>
        <h1>What up</h1>
        <h3>This app will help You undarstand basics of blockchain technology, as well as cryptocurrencies based on it. Let's dive in!</h3>
        <StyledSquare
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        />
      </Container>
    );
  }
};

export default Dashboard;
