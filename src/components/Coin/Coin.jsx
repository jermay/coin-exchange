import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fmt } from '../../js/utils';

const Td = styled.td`
    padding: 0.25rem;
    border-bottom: 1px solid #cccccc;
    text-align: left;
    width: 25vh;
}`;

const TdRight = styled(Td)`
    text-align: right;
    padding-right: 0.5rem;
`;

const Hr = styled.hr`
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    opacity: 0.75;
`;
 
const Button = styled.button`
    font-size: 1rem;
    margin: 0 1.5rem 0 1.5rem;
    background-color: rgb(20, 56, 97);
    color: #cccccc;
    border: 1px solid #cccccc;
    border-radius: 7px;
`;

export default function Coin(props) {

    const handleRefresh = (event) => {
        // prevent the default action of submitting the form
        event.preventDefault();
        props.handleRefresh(props.ticker);
    }

    let balance = null;
    if (props.showBalance) {
        balance =
            <TdRight>
                <span>{fmt.n6.format(props.balance)} </span>
                <span>{props.ticker}</span>
            </TdRight>
    }

    return (
        <>
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            {balance}
            <TdRight>{fmt.c.format(props.price)}</TdRight>
            <Td>
                <form action="#" method="POST">
                    <Button onClick={handleRefresh}>Refresh</Button>
                </form>
            </Td>
        </tr>
        </>
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
