import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Chapter from './Chapter';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <main>
        <h1>What up</h1>
        <h3>This app will help You undarstand basics of blockchain technology, as well as cryptocurrencies based on it. Let's dive in!</h3>
        <Link to='Blocks'>
          <Chapter type='Blocks' />
        </Link>
        <Link to='Cryptography'>
          <Chapter type='Cryptography' />
        </Link>
        <Link to='Mining'>
          <Chapter type='Mining' />
        </Link>
        <Link to='Blockchain'>
          <Chapter type='Blockchain' />
        </Link>
        <Link to='P2P'>
          <Chapter type='P2P' />
        </Link>
        <Link to='Transactions'>
          <Chapter type='Transactions' />
        </Link>
        <Link to='Wallets'>
          <Chapter type='Wallets' />
        </Link>
        <Link to='Transaction Pool'>
          <Chapter type='Transaction Pool' />
        </Link>
        <Link to='Cryptocurrency'>
          <Chapter type='Cryptocurrency' />
        </Link>
      </main>
    );
  }
};

export default Dashboard;
