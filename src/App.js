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
  }

  // note: the "key" attribute is required to uniquely identify the <td>
  render() {
    return (
      <Content>
        <AppHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </Content>
    );
  }
}

export default App;
