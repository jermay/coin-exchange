import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import AppHeader from './components/AppHeader/AppHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';

const Content = styled.div`
  text-align: center;
  background-color: rgb(20, 56, 97);
  color: #cccccc
`;

const COIN_COUNT = 10;
const API_BASE_URL = 'https://api.coinpaprika.com/v1';

class App extends React.Component {

  state = {
    balance: 10000,
    showBalance: true,
    coinData: []
  }

  componentDidMount = async () => {
    const response = await this.getCoinList();
    const coinIds = response.data
      .slice(0, COIN_COUNT)
      .map(coin => coin.id);

    // retrieve the prices
    const promises = coinIds.map(id => this.getCoinPrice(id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(response => {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: coin.quotes['USD'].price
      }
    })
    this.setState({ coinData: coinPriceData })
  };

  getCoinList = () => {
    return axios.get(`${API_BASE_URL}/coins`);
  }

  getCoinPrice = (id) => {
    return axios.get(`${API_BASE_URL}/tickers/${id}`);
  }

  // using arrow functions for event handlers allows us
  // to get rid of the explicit event bindings

  handleRefresh = async (valueChangeticker) => {
    // generate the new state by cloning the old state
    // and updating the target coin price
    const responses = this.state.coinData.map(async values => {
      let newValues = { ...values }; // shallow copy      
      if (values.ticker === valueChangeticker) {
        const response = await this.getCoinPrice(values.key);
        newValues.price = response.data.quotes['USD'].price;
      }
      return newValues;
    });
    const newCoinData = await Promise.all(responses);

    this.setState({ coinData: newCoinData });
  }

  handleToggleShowBalance = () => {
    this.setState({ showBalance: !this.state.showBalance });
  }

  render() {
    return (
      <Content>
        <AppHeader />
        <AccountBalance amount={this.state.balance}
          showBalance={this.state.showBalance}
          handleToggleShowBalance={this.handleToggleShowBalance} />
        <CoinList coinData={this.state.coinData}
          handleRefresh={this.handleRefresh}
          showBalance={this.state.showBalance} />
      </Content>
    );
  }
}

export default App;
