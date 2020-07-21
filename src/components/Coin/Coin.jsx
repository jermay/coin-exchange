import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td` {
    border: 1px solid #cccccc;
    width: 25vh;
}`;

export default function Coin(props) {

    const handleRefresh = (event) => {
        // prevent the default action of submitting the form
        event.preventDefault();
        props.handleRefresh(props.ticker);
    }

    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            {props.showBalance ? <Td>{props.balance}</Td> : null}
            <Td>${props.price}</Td>
            <Td>
                <form action="#" method="POST">
                    <button onClick={handleRefresh}>Refresh</button>
                </form>
            </Td>
        </tr>
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
