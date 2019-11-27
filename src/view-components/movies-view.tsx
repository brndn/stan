import React, {Component} from 'react';
import Base from './base-catalogue-view'
import {FILTER_TYPES} from './../domain-models/data-requests';

export default class Movies extends Base {
    constructor(props){
        super(props);
        this.queryFilter.max = 25;
        this.queryFilter.type = FILTER_TYPES.MOVIES;
    }
}