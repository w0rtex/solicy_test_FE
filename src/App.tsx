import React from 'react';

// Get all users
import {getAllAccounts} from "./services/accounts.service";

function App() {

    const [accounts, setAccounts] = React.useState([]);

    React.useEffect(() => {
        getAllAccounts().then(accounts => {
            setAccounts(accounts);
        })
    }, []);

  return (
    <div className="App">
      {accounts.map((account: any) => (
            <div key={account.id}>
                <h1>{account.name}</h1>
                <p>{account.date}</p>
            </div>
          )
      )}
    </div>
  );
}

export default App;
