import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbars from './components/layouts/Navbars';
import Landing from './components/layouts/Landing';
import Footers from './components/layouts/Footers';
import register from './components/auth/register';
import login from './components/auth/login';
import Sample from './components/auth/sample';
import './App.css';






class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Sample></Sample>
        {/* <Router>
          <div className="App">
            <Navbars></Navbars>
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={register} />
              <Route exact path="/login" component={login} />
            </div>
            <Footers />
          </div>
        </Router> */}
      </Provider>


    );
  }
}

export default App;
