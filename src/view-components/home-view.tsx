import React, {Component} from 'react';
import movies from "./../assets/movies-title.jpg";
import series from "./../assets/series-title.jpg";
import {
    Link,
} from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/movies"><img src={movies} height="200" /></Link>
                <Link to="/series"> <img src={series}/></Link>
            </div>
        )
    };
}