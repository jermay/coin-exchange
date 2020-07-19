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

  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9999.99
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 299.9
        },
        {
          name: "Tether",
          ticker: "USDT",
          price: 1.0
        },
        {
          name: "Ripple",
          ticker: "XRP",
          price: 0.2

        },
        {
          name: "Bitcoin Cash",
          ticker: 'BCH',
          price: 298.99
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeticker) {
    const newCoinData = this.state.coinData.map(function ({ ticker, name, price }) {
      let newPrice = price;
      if (ticker === valueChangeticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice *= randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice
      }
    });
    this.setState({ coinData: newCoinData });
  }

  render() {
    return (
      <Content>
        <AppHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </Content>
    );
  }
}

export default App;
