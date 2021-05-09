import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } 
from 'react-router-dom'
import LoginPage from './Components-for-home/LoginPage'
import Header from './Header'


function App() {
  return (
    <Router>
    <div>
      <Header />
        
        <Route path='/' exact>
          <LoginPage />
          

        </Route>

      

    </div>
    </Router>
  );
}

export default App;
