import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable }            from 'rxjs/Observable';

import { Apis,Crisis, CrisisService } from './crisis.service';
import {StorageService} from '../services/storage.service';

@Component({
  templateUrl: 'app/templates/apis-group.html',
  
})
export class CrisisListComponent implements OnInit {
  searchApiName: string ;
  crises: Observable<Crisis[]>;
  //apis: Observable<Apis[]>;
  private apis:Apis[] = [];
  selectedId: number;

  selectedName: string;
  showSubMenu : boolean;
  apiGroups : string[];
  groupsMap:groupsMap;
  groupMap : groupsMap[];
  private errorMessage:any = '';
  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router,
    private StorageService:StorageService
  ) {
    this.apiGroups = [];

    this.service.getApis().subscribe(apis => {
               this.apis = apis
               StorageService.setApisData(apis);
  for (var i = 0; i < this.apis.length; i++) {
    if(this.apiGroups.indexOf(this.apis[i].group)===-1){
        this.apiGroups.push(this.apis[i].group);
    }
  }
 },
            error => this.errorMessage = <any>error);


  }

  isSelected(api: Apis) {
    //return crisis.id === this.selectedId;
    return api.name === this.selectedName;
    
  }

  ngOnInit() {
    this.crises = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getCrises();
      });
  }

  onSelect(api: Apis) {
    this.selectedName = api.name;

    // Navigate with relative link
    this.router.navigate([api.name], { relativeTo: this.route });
  }

searchValueChange(search:string){
  let filtered = [];
 
  this.searchApiName = search;
   if (this.searchApiName && this.searchApiName.length) {
      for (var i = 0; i < this.apis.length; i++) {
        if (this.apis[i].name.toLowerCase().indexOf(this.searchApiName.toLowerCase()) >= 0
          || this.apis[i].group.toLowerCase().indexOf(this.searchApiName.toLowerCase()) >= 0)
                        filtered.push(this.apis[i]);
      }

    this.apis = filtered;
  }else{
    
  }

  
}
  toggleSideMenu(group:string){
  
   this.showSubMenu = !this.showSubMenu;
} 
}

interface groupsMap {
  groupName : string;
  payload : Apis[];
}
