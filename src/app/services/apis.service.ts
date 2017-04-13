import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApisService{
    constructor(private http:Http){
        console.log('Apis services initialized')
    }

getApis(){
    // return this.http.get('http://10.129.11.214:8008/apiworld/v1/apis')
    // .map(res => res.json());

return this.http.get('app/json/apisGroup.json')
    .map(res => res.json());
    
}
}