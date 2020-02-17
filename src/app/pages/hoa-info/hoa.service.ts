import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { States } from '../hoa-data/states';
// import { catchError, map } from 'rxjs/operators';

// const TOTAL_PAGES = 7;



@Injectable()
export class HoaService {

  constructor(private http: HttpClient) {}

  // getStates() {
  //   return this.http.get<States[]>('assets/data/states.json');
  // }
  getStates(): Observable<States[]> {
    return this.http.get<States[]>('../../../assets/data/states.json');
  }


/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
// private handleError<T> (operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {

//     // TODO: send the error to remote logging infrastructure
//     console.error(error); // log to console instead

//     // TODO: better job of transforming error for user consumption
//     // this.log(`${operation} failed: ${error.message}`);

//     // Let the app keep running by returning an empty result.
//     return of(result as T);
//   };
// }
  getMessage(): string {
    return 'Got this from the HoaService!';
  }
/** GET heroes from the server */
// getHeroes (): Observable<Hero[]> {
//   return this.http.get<Hero[]>(this.heroesUrl)
//     .pipe(
//       catchError(this.handleError('getHeroes', []))
//     );
// }
  // load(page: number, pageSize: number): Observable<NewsPost[]> {
  //   const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

  //   return this.http
  //     .get<StateList[]>('assets/data/states.json')
  //     .pipe(
  //       map(news => news.splice(startIndex, pageSize)),
  //       delay(1500),
  //     );
  // }
}
