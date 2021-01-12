import React from 'react'
import Navbar from './components/NavBar.js'
import About from './components/About.js'
import Shop from './components/Shop.js'
import Cart from './components/Cart.js'
import Home from './components/Home.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// useSelector from react-redux

function App() {
  return (
    <Router> 
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;


