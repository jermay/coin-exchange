import React from 'react';
import styled from 'styled-components';

import AppHeader from './components/AppHeader/AppHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';

const Content = styled.div`
  text-align: center;
  background-color: rgb(20, 56, 97);
  color: #cccccc
`;

class App extends React.Component {

  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.99
      },
      {
        name: "Ethereum",
        ticker: "ETH",
        balance: 32.0,
        price: 299.9
      },
      {
        name: "Tether",
        ticker: "USDT",
        balance: 0,
        price: 1.0
      },
      {
        name: "Ripple",
        ticker: "XRP",
        balance: 1000,
        price: 0.2

      },
      {
        name: "Bitcoin Cash",
        ticker: 'BCH',
        balance: 0,
        price: 298.99
      }
    ]
  }

  // using arrow functions for event handlers allows us
  // to get rid of the explicit event bindings

  handleRefresh = (valueChangeticker) => {
    // generate the new state by cloning the old state
    // and updating the target coin price
    const newCoinData = this.state.coinData.map(function (values) {
      let newValues = { ...values}; // shallow copy
      if (values.ticker === valueChangeticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });
    this.setState({ coinData: newCoinData });
  }

  handleToggleShowBalance = () => {
    this.setState({showBalance: !this.state.showBalance});
  }

  render() {
    return (
      <Content>
        <AppHeader />
        <AccountBalance amount={this.state.balance}
            showBalance={this.state.showBalance}
            handleToggleShowBalance={this.handleToggleShowBalance}/>
        <CoinList coinData={this.state.coinData}
            handleRefresh={this.handleRefresh}
            showBalance={this.state.showBalance} />
      </Content>
    );
  }
}

export default App;
