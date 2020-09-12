import React, { Component } from 'react';
import HomeComp from './components/Covid/HomeComp';
import News from './components/News/News';
import Gallery from './components/Gallery/Gallery';
import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router,Route, Redirect,Switch} from 'react-router-dom';
import './App.module.css';
import About from './components/About/About';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Menu/>
                    <Switch>
                    <Route exact path='/Home' component={HomeComp} />
                    <Route exact path='/News' component={News}/>
                    <Route exact path='/Gallery' component={Gallery}/>
                    <Route exact path='/About' component={About}/>
                    <Redirect to='/Home'/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;