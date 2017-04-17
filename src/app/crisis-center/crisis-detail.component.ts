import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { slideInDownAnimation }   from '../animations';
import { Apis }         from './crisis.service';
import { DialogService }  from '../dialog.service';
import {StorageService} from '../services/storage.service';
import {AppComponent} from '../app.component';
@Component({
   templateUrl: 'app/templates/api-details.html',
  styles: ['input {width: 20em}']
  //,animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit {
  //@HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  
 apiData :Apis;
  
  apiDataByApiName :Apis[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService,
    private storageService:StorageService,
    private parent: AppComponent
  ) {
    console.log(parent.searchApiName);
  }

  ngOnInit() {
    
this.apiDataByApiName = this.storageService.getApisData();
 console.log("onINT "+this.parent.searchApiName);
    this.route.data
      .subscribe((data: { apiData: Apis }) => {
       console.log("inside "+this.parent.searchApiName);
        this.apiData = data.apiData;
        let apiName = this.route.snapshot.params['id'];
        this.apiDataByApiName = this.storageService.getApisData();
        this.apiDataByApiName = this.apiDataByApiName.filter(
        Apis => Apis.name === apiName);

      });
      console.log(this.apiData.name);
  }
 public getRandomColor(field:string)
 {
  if(field=='get'){
    return '#0f6ab4';
  }if(field=='post'){
    return '#10a54a';
  }
  if(field=='delete'){
   return '#a41e22';
  }
  if(field=='put'){
     return '#10a54a';
  }
        
 }
  public getbodyColor(field:string)
  {
    if(field=='get'){
      return '#e7f0f7';
    }if(field=='post'){
      return '#e7f6ec';
    }
    if(field=='delete'){
    return '#f5e8e8';
    }
    if(field=='put'){
      return '#f5e8e8';
    }
          
  }
 
  cancel() {
   
  }

 

  canDeactivate(): Promise<boolean> | boolean {
    return true;
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    //  if (!this.apiData || this.apiData.name === this.editName) {
    //    return true;
    // }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    //return this.dialogService.confirm('Discard changes?');
  }

 
}
