import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    var apiUrl = 'http://localhost:8080/api/subreddit';
    let srcObservable = this.http.get(apiUrl);
    var url =
      'https://insights-collector.newrelic.com/v1/accounts/3441090/events';
    var headersData = {
      'Content-Type': 'application/json; charset=utf-8',
      'Api-Key': '279bdfc9c03f3e2ac0605236d3a8c7d4348bNRAL',
    };
    var eventsData = [
      {
        eventType: 'NewRelicData',
        url: apiUrl,
      },
    ];
    const headers = new HttpHeaders(headersData);
    let innerObservable = this.http.post(url, eventsData, { headers });
    srcObservable
      .pipe(
        mergeMap((val) => {
          console.log('observable 1, result: ', val);
          return innerObservable;
        })
      )
      .subscribe((ret) => {
        console.log('observable 2, result: ', ret);
      });
  }
}
