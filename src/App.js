import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Details from './components/Details';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Default from './components/Default';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/ProductList" component={ProductList} />
          <Route path="/Contact" component={Contact} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
