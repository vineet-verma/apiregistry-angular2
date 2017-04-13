import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { ApisComponent } from './components/apisgroup.component';
import {ApiDetailsComponent} from './components/apiDetails.component';
import {ApisService} from './services/apis.service';

export const router:Routes = [
   
    
      {
         path: '',
         component: ApisComponent,
          children: [{
                        path: ':apiName',
                        component: ApiDetailsComponent,
                    }
                ]
      }
   
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

