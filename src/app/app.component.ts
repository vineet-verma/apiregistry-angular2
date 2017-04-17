import {Input, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
  
})
export class AppComponent {
  @Input()
  searchApiName: string = '';

}
