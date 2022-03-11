import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected endpoint: string = ''; 

  constructor(protected httpClient: HttpClient) { }

  get(path: string): Observable<any> {
    const url = environment.apiUrl + path;
    return this.httpClient.get(url);
  }

  getItems(): Observable<any> {
    const url = environment.apiUrl + this.endpoint;
    return this.httpClient.get(url);
  }


}
