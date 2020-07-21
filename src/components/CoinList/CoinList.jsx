import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default function CoinList(props) {

  // note: the "key" attribute is required to uniquely identify the <td>
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            {props.showBalance ? <th>Balance</th> : null}
            <th>Price</th>
            <th>Actions</th>
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
