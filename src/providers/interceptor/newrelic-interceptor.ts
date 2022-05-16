// import {
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
//   HttpEvent,
//   HttpHeaders,
//   HttpClient,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { take } from 'rxjs/operators';

// @Injectable()
// export class NewRelicInterceptor implements HttpInterceptor {
//   message: any = null;
//   constructor(private http: HttpClient) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     console.log('inside interceptor');
//     const authReq = req.clone();
//     console.log(authReq.url);

//     var url =
//       'https://insights-collector.newrelic.com/v1/accounts/3441090/events';
//     var headersData = {
//       'Content-Type': 'application/json; charset=utf-8',
//       'Api-Key': '279bdfc9c03f3e2ac0605236d3a8c7d4348bNRAL',
//     };
//     var eventsData = [
//       {
//         eventType: 'NewRelicData',
//         url: authReq.url,
//       },
//     ];
//     const headers = new HttpHeaders(headersData);

//     if (!this.message) {
//       this.message = this.http
//         .post(url, eventsData, { headers })
//         .pipe(take(1))
//         .subscribe((res) => {
//           console.log('New Relic Response: ', res);
//         });
//     }
//     console.log(
//       'intercepting request: ',
//       authReq.method,
//       authReq.url,
//       authReq.headers,
//       authReq.body
//     );
//     return next.handle(authReq);
//   }
// }
