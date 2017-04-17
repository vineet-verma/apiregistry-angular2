import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable }            from 'rxjs/Observable';

import { Apis,Crisis, CrisisService } from './crisis.service';

@Component({
  templateUrl: 'app/templates/apis-group.html',
  
})
export class CrisisListComponent implements OnInit {
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
    private router: Router
  ) {
    this.apiGroups = [];

    this.service.getApis().subscribe(apis => {
               this.apis = apis
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



  toggleSideMenu(group:string){
  
   this.showSubMenu = !this.showSubMenu;
} 
}

interface groupsMap {
  groupName : string;
  payload : Apis[];
}
