import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get("http://localhost:8080/menu", this.httpParams);
  }
}
