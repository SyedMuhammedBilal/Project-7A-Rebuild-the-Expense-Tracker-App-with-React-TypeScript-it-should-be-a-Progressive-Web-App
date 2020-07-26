import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const transactionAmounts = transactions.map(transaction => transaction.amount);
    const balance = transactionAmounts.reduce((a, b) => (a + b), 0);

    return (
        <div className="balance">
            <h4>Balance:</h4>
            <h1>${balance}</h1>
        </div>
    )
}

export default Balance;