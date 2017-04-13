import { Component,ElementRef } from '@angular/core';
import {ApisService} from '../services/apis.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
@Component({
  selector: 'apis',
  templateUrl: 'app/templates/apis-group.html',
  providers:[ApisService]
})
export class ApisComponent  { 
 name:string;
 email:string;
 address :address;
 hobbies : string[];
 showHobbies : boolean;
 showSubMenu : boolean;
 apiGroups : string[];
 apis :apis[];
  groupedAPIs :apis[];
 groupsMap:groupsMap;
 groupMap : groupsMap[];
 
  

constructor(private apisService : ApisService,private  elRef:ElementRef,private route: ActivatedRoute,
    private router: Router){
    console.log('Apis component contructor runs');
    this.name = 'Vineet'; 
    this.email = 'vineetkumar.verma@markit.com'
    this.address = {
                  street : '122 Big strrer',
                  city : 'Delhi',
                  pin: '110051'
                }
                this.hobbies = ['music','Sports','Dance'];
                this.showHobbies = false;
                this.showSubMenu = false;
                this.apiGroups = [];
                this.groupMap = [];
                this.groupsMap = {
                  groupName : "",
                  payload : []
                }
                this.groupedAPIs = [];
this.apisService.getApis().subscribe(apis =>{
  console.log(apis);
  this.apis = apis;
 
  
  for (var i = 0; i < this.apis.length; i++) {
    if(this.apiGroups.indexOf(this.apis[i].group)===-1){
        this.apiGroups.push(this.apis[i].group);
    }
  }
  
});
}

toggleHobbies(){
  this.showHobbies = !this.showHobbies;
}

toggleSideMenu(group:string){
   let ad = this.elRef.nativeElement.querySelector('.SubMenu_'+group)
   this.showSubMenu = !this.showSubMenu;
}


onSelect(api: apis) {
    // Navigate with relative link
    this.router.navigate([api.name], { relativeTo: this.route });
  }




}

interface address {
  street:string;
  city:string;
  pin:string;
}
interface apis {
  name : string;
  title : string;
  description : string;
  url : string;
  tags : string[];
  group : string;
}
interface groupsMap {
  groupName : string;
  payload : apis[];
}
