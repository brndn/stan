import React, {Component} from 'react';
import {FILTER_TYPES, getDataByProgramType} from './../domain-models/data-requests';
import {renderTitles} from './title-renderer';

export default class Base extends Component {
    constructor(props){
        super(props);
    }
    states = { LOADING: "LOADING", LOADED: "LOADED" };
    defaultRederer = <div>loading</div>;
    state = { currentState: this.states.LOADING, renderer : this.defaultRederer};
    queryFilter = { max: 25, type: FILTER_TYPES.SERIES};
    defaultClass = 'default';

    componentDidMount() {
        super.setState({ renderer: this.defaultRederer });
        getDataByProgramType(this.queryFilter.type).then((items)=>{
            super.setState({ renderer: renderTitles(items, this.queryFilter.max, this.defaultClass) })
        }).catch((error)=>{
            super.setState({ renderer: <div>Opps something went wrong!!</div> })
        })
    }
    render() {
        return (
            this.state.renderer
        )
    };
}