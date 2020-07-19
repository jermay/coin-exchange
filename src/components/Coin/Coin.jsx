import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td` {
    border: 1px solid #cccccc;
    width: 25vh;
}`;

export default class Coin extends Component {
    constructor(props) {
        super(props);
        // explicitly set the context for the event handler
        this.handleRefresh = this.handleRefresh.bind(this);
    }

    handleRefresh(event) {
        // prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);

        // const randomPercentage = 0.995 + Math.random() * 0.01;
        
        // // the "this" context is different when the event is invoked
        // this.setState(function(oldState) {
        //     return {
        //         price: oldState.price * randomPercentage
        //     };
        // });
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
