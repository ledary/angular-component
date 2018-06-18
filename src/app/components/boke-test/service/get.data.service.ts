import {Injectable} from '@angular/core';

@Injectable()
export class GetDataService {
    constructor() {
        console.log(11111111111111111);
    }

    getData(str) {
        console.log('getData: ' + str);
    }
}