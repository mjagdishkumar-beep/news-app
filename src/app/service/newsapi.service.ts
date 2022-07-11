import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http: HttpClient) { }
  topNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7adc10e7cb264a1fa1376414f76bb836'

  techNews = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=7adc10e7cb264a1fa1376414f76bb836'

  topHeadlines(): Observable<any>{
    return this._http.get(this.topNews);
  }

  techHeadlines(): Observable<any>{
    return this._http.get(this.techNews);
  }
}
