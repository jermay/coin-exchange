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
        this.state = {
            price: this.props.price ,
        }

        // explicitly set the context for the event handler
        this.handleClick = this.handleClick.bind(this);
    }

    /*
    componentDidMount() {
        setInterval(() => {
            // set the state to a new random value
            const randomPercentage = 0.995 + Math.random() * 0.01;

            // DON'T DO THIS - only in constructor is this allowed
            // this.state.price = this.state.price * randomPercentage;

            this.setState(function(oldState) {
                return {
                    price: oldState.price * randomPercentage
                };
            });
        }, 1000);
    }
    */

    handleClick(event) {
        // prevent the default action of submitting the form
        event.preventDefault();

        const randomPercentage = 0.995 + Math.random() * 0.01;
        
        // the "this" context is different when the event is invoked
        this.setState(function(oldState) {
            return {
                price: oldState.price * randomPercentage
            };
        });
    }

    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.state.price}</Td>
                <Td>
                    <form action="#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
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
