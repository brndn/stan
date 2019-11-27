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
import {downloadImageData} from "../domain-models/data-requests";
import Logo from "./logo";
import Login from "./login";

const  states = { LOADING: "LOADING", LOADED: "LOADED" };


function renderLoadedApp() {
        return <Router>
            <Route path='/'>
                <Redirect to="/home" />
            </Route>
            <header>
                <div className="logo-login">
                    <Logo />
                    <Login />
                </div>
            </header>
            <div className="content">
                <div className="content-inner">
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
            </div>
            <Footer />
        </Router>;
}

export default class App extends Component {

    defaultRederer = <div>loading</div>;
    state = { currentState: states.LOADING, renderer : this.defaultRederer};

    componentDidMount() {
        downloadImageData().then(() => {
                super.setState({ currentState: states.LOADED});
        });
    }


    render() {
        const appLoadedContent = this.state.currentState === states.LOADED ? renderLoadedApp() : <div></div>;
        return (
            <div id="app-wrapper" className={this.state.currentState}>
                {appLoadedContent}
                <div className="loader-container"><div className="loader">Loading...</div></div>
            </div>
        )
    }
}
