import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    
  const onSubmit = (e: { preventDefault: () => void;}) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            title,
            amount: +amount
        };
        addTransaction(newTransaction);
    };
    
  return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} data-testid="transaction-form">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                  <input
                      type="text"
                      value={title}
                      data-testid="name"
                      onChange={e => setTitle(e.target.value)}
                      placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                        data-testid="amount"
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
}

export default AddTransaction;
