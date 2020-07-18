import React, { Component } from 'react';
import './Coin.css';

export default class Coin extends Component {
    render() {
        return (
            <tr className="coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.props.price}</td>
            </tr>
        );
    }
}
