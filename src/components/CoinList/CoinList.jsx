import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

const Th = styled.th`
  border-bottom: 1px solid #cccccc;
  text-align: left;
`;

const ThRight = styled(Th)`
  text-align: right;
  padding-right: 0.5rem;
`;

export default function CoinList(props) {

  // note: the "key" attribute is required to uniquely identify the <td>
  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Ticker</Th>
            {props.showBalance ? <ThRight>Balance</ThRight> : null}
            <ThRight>Price</ThRight>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {
            props.coinData.map(({ key, name, ticker, balance, price }) =>
              <Coin key={key}
                handleRefresh={props.handleRefresh}
                name={name}
                ticker={ticker}
                balance={balance}
                showBalance={props.showBalance}
                price={price} />)
          }
        </tbody>
      </Table>
    </>
  )
}
