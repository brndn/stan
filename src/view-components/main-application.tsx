import React, {Component} from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
} from "react-router-dom";
import Home from './home-view';
import Series from './series-view';
import Movies from './movies-view';
import Footer from "./footer";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path='/'>
                    <Redirect to="/home" />
                </Route>
                <header>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/series">Series</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                    </ul>
                </header>
                <div className="content">
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/series">
                            <Series />
                        </Route>
                        <Route path="/movies">
                            <Movies />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        )
    }
}
