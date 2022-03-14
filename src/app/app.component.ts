import { Component } from '@angular/core';
declare var NewRelic;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    console.log('before new relic init');
    NewRelic.initialize();
    console.log('after new relic init');
  }
}
