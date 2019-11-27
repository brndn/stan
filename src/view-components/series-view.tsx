import React, {Component} from 'react';
import Base from './base-catalogue-view'

export default class Series extends Base {
    constructor(props){
        super(props);
        this.queryFilter.max = 25;
    }
}