import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Trunkshow from './components/pages/Trunkshow';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Trunkshow} />
          <Route path='/products' component={Products} />
          <Route path='/trunkshow' component={Trunkshow} />
          <Route path='/trunkshow' component={Trunkshow} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
