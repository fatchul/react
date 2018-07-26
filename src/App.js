import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class App extends Component {



  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Product</h1>
      //   </header>
      //   <p className="App-intro">
      //     List Product
      //   </p>
      //   {this.state.data.map(d => 
      //     <p><a href={d.url}>{d.name}</a></p>
      //   )}
      // </div>

      <Router >
            <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/login'}>Login</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
               </Switch>
            </div>
         </Router>
    );
  }
}

export default App;
