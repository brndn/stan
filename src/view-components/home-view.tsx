import React, {Component} from 'react';
import Base from './base-catalogue-view'

export default class Home extends Base {
    constructor(props){
        super(props);
        this.queryFilter.max = 2;
    }
}