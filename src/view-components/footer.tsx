import React, {Component} from 'react'
import { ReactComponent as FB } from './../assets/social/facebook-white.svg';
import { ReactComponent as IG } from './../assets/social/instagram-white.svg';
import { ReactComponent as TW } from './../assets/social/twitter-white.svg';
import { ReactComponent as APP_STORE } from './../assets/store/app-store.svg';
import { ReactComponent as GOOGLE_PLAY } from './../assets/store/play-store.svg';
import { ReactComponent as WINDOWS_STORE } from './../assets/store/windows-store.svg';
import {
    Link,
} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-text">
                    <Link to="/home"> <p>Home</p></Link>
                    <p> | Terms and Conditions | </p>
                    <p>Privacy Policy | </p>
                    <p>Collection Statement</p>
                </div>
                <div className="footer-icons">
                    <div className="footer-icons-left">
                <FB className="icon-svg"/>
                <IG className="icon-svg"/>
                <TW className="icon-svg"/>
                    </div>
                    <div className="footer-icons-right">
                <APP_STORE className="icon-svg"/>
                <GOOGLE_PLAY className="icon-svg"/>
                <WINDOWS_STORE className="icon-svg"/>
                    </div>
                </div>
            </footer>
        )
    }
}