import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fmt } from '../../js/utils';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

const Button = styled.button`
    font-size: 1.4rem;
    margin: 1.5rem 0 1.5rem 5rem;
    background-color: rgb(20, 56, 97);
    color: #cccccc;
    border: 1px solid #cccccc;
    border-radius: 7px;
`;

export default function AccountBalance(props) {

    let buttonText = 'Show Balance';
    let balance = null;
    let btnHelicopterMoney = null;

    if (props.showBalance) {
        buttonText = 'Hide Balance';
    balance = <span>Balance: {fmt.c.format(props.amount)}</span>;
        btnHelicopterMoney = <Button onClick={props.addHelicopterMoney}>Add Helicopter $$</Button>;
    }

    return (
        <Section>
            {balance}
            <Button onClick={props.handleToggleShowBalance}>{buttonText}</Button>
            {btnHelicopterMoney}
        </Section>
    );
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}