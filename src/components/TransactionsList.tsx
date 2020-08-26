import React, { useContext } from 'react';
import Transaction from './Transaction'

import { GlobalContext } from '../context/GlobalState'

 function TransactionsList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul data-testid="list" className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id}
            id={transaction.id}
            title={transaction.title}
            amount={transaction.amount} />))}    
            </ul>
        </div>
    )
}

export default TransactionsList;