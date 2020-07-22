import React, { useState, useEffect } from 'react';
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

function App(props) {

  // state using hooks
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await getCoinList();
    const coinIds = response.data
      .slice(0, COIN_COUNT)
      .map(coin => coin.id);

    // retrieve the prices
    const promises = coinIds.map(id => getCoinPrice(id));
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
    });
    setCoinData(coinPriceData);
  };

  // useEffect can't return a promise or will get errors
  useEffect(function() {
    if (coinData.length === 0) {
      componentDidMount();
    } else {
      // component did update
    }
  })

  const getCoinList = () => {
    return axios.get(`${API_BASE_URL}/coins`);
  }

  const getCoinPrice = (id) => {
    return axios.get(`${API_BASE_URL}/tickers/${id}`);
  }

  // using arrow functions for event handlers allows us
  // to get rid of the explicit event bindings

  const handleRefresh = async (valueChangeticker) => {
    // generate the new state by cloning the old state
    // and updating the target coin price
    const responses = coinData.map(async values => {
      let newValues = { ...values }; // shallow copy      
      if (values.ticker === valueChangeticker) {
        const response = await getCoinPrice(values.key);
        newValues.price = response.data.quotes['USD'].price;
      }
      return newValues;
    });
    const newCoinData = await Promise.all(responses);

    setCoinData(newCoinData);
  }

  const handleToggleShowBalance = () => {
    setShowBalance(oldValue => !oldValue);
  }

  const addHelicopterMoney = () => {
    setBalance(oldValue => oldValue + 1200);
  }

  return (
    <Content>
      <AppHeader />
      <AccountBalance amount={balance}
        showBalance={showBalance}
        handleToggleShowBalance={handleToggleShowBalance}
        addHelicopterMoney={addHelicopterMoney}/>
      <CoinList coinData={coinData}
        handleRefresh={handleRefresh}
        showBalance={showBalance} />
    </Content>
  );

}

export default App;
