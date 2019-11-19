import React, {Component} from 'react';
import {filterTypes, getDataByProgramType} from './../domain-models/data-requests';
import {renderTitles} from './title-renderer';

export default class Base extends Component {

    states = { LOADING: "LOADING", LOADED: "LOADED" };
    defaultRederer = <div>loading</div>;
    state = { currentState: this.states.LOADING, renderer : this.defaultRederer};
    queryFilter = { max: 21, type: filterTypes.SERIES};

    componentDidMount() {
        this.setState({ renderer: this.defaultRederer });
        getDataByProgramType(this.queryFilter.type).then((data)=>{
            this.setState({ renderer: renderTitles(data, this.queryFilter.max) })
        });
    }
    render() {
        return (
            this.state.renderer
        )
    };
}