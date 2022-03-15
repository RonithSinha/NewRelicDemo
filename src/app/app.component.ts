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

    try {
      NewRelic.initialize();
    } catch (error) {
      console.log(error);
    }

    try {
      NewRelic.enableCrashReporting(true);
    } catch (error) {
      console.log(error);
    }

    try {
      NewRelic.setApplicationVersion('2.3.32');
    } catch (error) {
      console.log(error);
    }

    try {
      NewRelic.recordMetricWithName('metric1', 'category1');
    } catch (error) {
      console.log(error);
    }

    try {
      NewRelic.crashNow();
    } catch (error) {
      console.log(error);
    }

    console.log('after new relic init');
  }
}
