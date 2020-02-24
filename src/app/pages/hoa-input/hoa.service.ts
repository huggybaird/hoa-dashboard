import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { States } from '../hoa-data/states';
import { publishReplay, refCount, map } from 'rxjs/operators';
// import { catchError, map } from 'rxjs/operators';

// const TOTAL_PAGES = 7;



@Injectable()
export class HoaService {

  constructor(private http: HttpClient) {}

  private API_URL = 'http://localhost:8080/api/';

  getStates(): Observable<States[]> {
    return this.http.get<States[]>('../../../assets/data/states.json');
  }
  configs: Observable<Config[]>;

  getMessage(): string {
    return 'Got this from the HoaService!';
  }

  getConfig(): Observable<HttpResponse<Config[]>> {
    return this.http.get<Config[]>(
      this.API_URL + 'config/all', { observe: 'response' });
  }
 // Get configs from server | HTTP GET
 getConfigs(): Observable<Config[]> {

    // Cache it once if configs value is false
    if (!this.configs) {
      // this.configs = this.http.get(`${this.API_URL}/config/all`).pipe(
      //     map(data => data['configs']),
      //     publishReplay(1), // this tells Rx to cache the latest emitted
      //     refCount(), // and this tells Rx to keep the Observable alive as long as there are any Subscribers
      // );


      this.configs = this.http.get <Config[]>(`${this.API_URL}/config/all`).pipe(
        // map(data => data['configs']),
        publishReplay(1), // this tells Rx to cache the latest emitted
        refCount(), // and this tells Rx to keep the Observable alive as long as there are any Subscribers
    );


    }

    return this.configs;
  }

  // Clear configs
  clearCache() {
    this.configs = null;
  }

  saveHoa(myHoa: Hoa): Observable<Hoa> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'my-auth-token',
    //   }),
    // };
    return this.http.put<Hoa>(`${this.API_URL}/hoa/update/${myHoa.id}`, myHoa); // , httpOptions);
    // .pipe(
    //   //console.error("ERROR!!");
    //   catchError(this.handleError('updateHero', hero))
    // );
  }

}
export interface Config {
  name: string;
  value: string;
}
export interface Hoa {
  id:	number;
  userId: number;
  name:	string;
  propertyType:	string;
  propertyTypeDesc:	string;
  floorCount:	number;
  sqFtPerUnit:	number;
  unitCount:	number;
  yearBuilt:	number;
  hoaWebsiteUrl:	string;
  address1:	string;
  address2:	string;
  city:	string;
  state:	string;
  zip:	string;
}
