import React from 'react';
import './App.css';
import Headers from './components/Headers'
import Balance from './components/Balance';
import Income from './components/IncomeExpenses';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Headers />
      <div className="container">
        <Balance />
        <Income />
        <TransactionsList />
        <AddTransaction />
      </div> 
    </GlobalProvider>
  );
}

export default App;