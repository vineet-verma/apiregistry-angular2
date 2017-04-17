import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { Apis,Crisis, CrisisService } from './crisis.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

// @Injectable()
// export class CrisisDetailResolver {
//   constructor(private cs: CrisisService, private router: Router) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Apis {
//     let id = route.params['id'];

//     return this.cs.getCrisis(id).then(crisis => {
//       if (crisis) {
//         return crisis;
//       } else { // id not found
//         this.router.navigate(['/crisis-center']);
//         return null;
//       }
//     });
  
    
    
//   }
// }
@Injectable()
export class CrisisDetailResolver implements Resolve<Apis> {

  constructor(private cs: CrisisService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    return new Apis(route.paramMap.get('id'),
    "Mail Notification API",
    "Exposes REST endpoint for sending mail notifications.",
    "http://edit.swagger.html",
    [],"Notification",[ {
    "method" : "post",
    "path" : "/mail",
    "summary" : "Sends mail for as per incoming notification",
    "description" : "Simply sends the mail for the incoming message"
  } ]);
  }
}