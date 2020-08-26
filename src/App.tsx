import React from 'react';
import './App.css';
import Headers from './components/Headers'
import Balance from './components/Balance';
import Income from './components/IncomeExpenses';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState';
import firebase from './firebase';

class App extends React.Component {

  constructor(props: Readonly<{}>) {
    super(props)
  
    this.state = {
       
    }
  }
  
  async componentDidMount() {
    const messaging = firebase.messaging()
    await messaging.requestPermission().then(() => {
      return messaging.getToken()
    }).then(token => {
      console.log('Token: ', token);
    }).catch(() => {
      console.log('error');
    })
  }

  render() {
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
}

export default App;