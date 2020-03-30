import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Student from './components/Student';
import customHistory from './components/History'
import Redirect from './components/Redirect'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter history={customHistory}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/student/:Jane Smith">Student: Jane Smith</Link>
            </li>
            <li>
              <Link to="/student/:Jane Smith/:50001">Student: Jane Smith, Student No: 50001</Link>
            </li>
            <li>
              <Link to="/redirect">Redirect</Link>
            </li>
          </ul>
          <Route>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/student/:studentName" component={Student} exact/>
            <Route path="/student/:studentName/:studentNo" component={Student} exact/>
            <Route path="/redirect" component={Redirect} />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
