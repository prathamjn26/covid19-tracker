import React, { Component } from 'react';
import HomeComp from './components/Covid/HomeComp';
import News from './components/News/News';
import Gallery from './components/Gallery/Gallery';
import Menu from './components/Menu/Menu.jsx';
import {BrowserRouter as Router,Route, Redirect,Switch} from 'react-router-dom';

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
                    <Redirect to='/Home'/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;