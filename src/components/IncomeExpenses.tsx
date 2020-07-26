import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const transactionAmounts = transactions.map(transaction => transaction.amount);
    const income = transactionAmounts.filter(i => i>0).reduce((a, b) => (a+b), 0);
    const expense = -transactionAmounts.filter(i => i<0).reduce((a, b) => (a+b), 0);
    
    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">${expense}</p>
                </div>
            </div>
        </div>
    )
}

export default IncomeExpenses;