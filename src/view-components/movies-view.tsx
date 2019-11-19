import React, {Component} from 'react';
import Base from './base-catalogue-view'
import {filterTypes} from './../domain-models/data-requests';

export default class Movies extends Base {
    constructor(props){
        super(props);
        this.queryFilter.max = 21;
        this.queryFilter.type = filterTypes.SERIES;
    }
}