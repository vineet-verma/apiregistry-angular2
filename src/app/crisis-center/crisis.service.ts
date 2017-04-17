export class Crisis {
  constructor(public id: number, public name: string) { }
}
export class Operations {
  constructor(public method: string,
  public path: string,
  public summary: string,
  public description: string,
  ) { }
}

export class Apis {
  constructor(
  public name : string,
  public title : string,
  public description : string,
  public url : string,
  public tags : string[],
  public group : string,
  public operations : Operations[]) { }
}

const CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

let crisesPromise = Promise.resolve(CRISES);
let apisPromise = Promise.resolve('app/json/apisGroup.json');
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }            from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class CrisisService {
    
    constructor(private http:Http){
        console.log('Apis services initialized')
    }

  static nextCrisisId = 100;

  getCrises() { return crisesPromise; }   

  getCrisis(id: number | string) {
    return crisesPromise
      .then(crises => crises.find(crisis => crisis.id === +id));
  }
  
  

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      let crisis = new Crisis(CrisisService.nextCrisisId++, name);
      crisesPromise.then(crises => crises.push(crisis));
    }
  }
  getApis1(){
    // return this.http.get('http://10.129.11.214:8008/apiworld/v1/apis')
    // .map(res => res.json());

  // return this.http.get('app/json/apisGroup.json')
  //     .map(res => res.json());
  return Promise.resolve('app/json/apisGroup.json')    
}
getApis():Observable<Apis[]> {
    return this.http.get('app/json/apisGroup.json')
        .map(this.extractData)
        .catch(this.handleError);
}

getApi(id: string): Observable<Apis> {
        return this.http.get('app/json/apisGroup.json').map(this.extractData)
        .filter(project => (<Apis>project).name == id).catch(this.handleError);
}


private extractData(res:Response) {
    let body = res.json();
    return body || [];
}
private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
}
}
