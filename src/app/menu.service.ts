import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  httpParams: {[name: string]: string | {}} = {
    "observe": "body",
    "responseType": "json",
  };

  constructor(private http: HttpClient) { }

  getMenu(shortName: string): Observable<any> {
    this.httpParams["params"] = {"name": shortName};
    var url = environment.apiUrl + "menu";
    return this.http.get(url, this.httpParams);
  }
}
