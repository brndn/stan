import React, {Component} from 'react'
import { ReactComponent as FB } from './../assets/social/facebook-white.svg';
import { ReactComponent as IG } from './../assets/social/instagram-white.svg';
import { ReactComponent as TW } from './../assets/social/twitter-white.svg';
import { ReactComponent as APP_STORE } from './../assets/store/app-store.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <FB/>
                <IG/>
                <TW/>
                <APP_STORE/>
            </footer>
        )
    }
}