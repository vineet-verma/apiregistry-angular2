import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class StorageService {
    private myValue:any;

    constructor() {}

    setApisData(val:any) {
        this.myValue = val;
    }

    getApisData() {
        return this.myValue;
    }
}