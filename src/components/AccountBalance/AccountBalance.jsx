import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

const BtnBalance = styled.button`
    font-size: 1.4rem;
    margin: 1.5rem 0 1.5rem 5rem;
    background-color: rgb(20, 56, 97);
    color: #cccccc;
    border: 1px solid #cccccc;
    border-radius: 7px;
`;

export default class AccountBalance extends Component {
    render() {
        const buttonText = this.props.showBalance ?
            'Hide Balance' : 'Show Balance';

        let balance = this.props.showBalance ?
            <span>Balance: ${this.props.amount}</span>
            : null;

        return (
            <Section>
                {balance}
                <BtnBalance onClick={this.props.handleToggleShowBalance}>{buttonText}</BtnBalance>
            </Section>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}