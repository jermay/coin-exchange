import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td` {
    border: 1px solid #cccccc;
    width: 25vh;
}`;

export default class Coin extends Component {

    handleRefresh = (event) => {
        // prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
    }

    render() {
        const balance = this.props.showBalance ?
            <Td>{this.props.balance}</Td> : null;

        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                {balance}
                <Td>${this.props.price}</Td>
                <Td>
                    <form action="#" method="POST">
                        <button onClick={this.handleRefresh}>Refresh</button>
                    </form>
                </Td>
            </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
