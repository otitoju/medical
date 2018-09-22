import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Router from './router'

class App extends Component {
  render() {
    return (
      <div>
            <Route component={Header} />
            <Route component={Router} />
            <Route component={Footer} />
      </div>
    );
  }
}

export default App;
