import { Component,ElementRef,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
@Component({
  selector: 'apiDetails',
  templateUrl: 'app/templates/apiDetails.html',
})
export class ApiDetailsComponent implements OnInit { 
  apiName: string;

constructor(private route: ActivatedRoute,private router: Router){
    console.log('Api details component contructor runs');
   this.apiName = route.snapshot.params['apiName'];
   console.log("api Name is : " + this.apiName);
}

ngOnInit() {
   this.router.events.subscribe((event) => {
      // example: NavigationStart, RoutesRecognized, NavigationEnd
      console.log(event);
    });
  }

}
