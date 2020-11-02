import React, { Component } from 'react'
import PageWrappr from "./components/PageWrapper";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

// pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from './components/pages/Contact';
import Services from './components/common/Services';
import Portfolio from './components/common/Portfolio';
import Team from './components/common/Team';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>

        <PageWrappr>
          
            <Route 
            exact={true}
            path="/"
            component={Home}
            />
            
            <Route
            path="/About"
            component={About}
            />
            
            <Route
            path="/contact"
            component={Contact}
            />

            <Route
            path="/services"
            component={Services}
            />

            <Route
            path="/portfolio"
            component={Portfolio}
            />

            <Route
            path="/team"
            component={Team}
            />

         


        </PageWrappr>
        </Router>
      </div>
    )
  }
}

