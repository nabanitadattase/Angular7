import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SourcesService {

  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get(`https://newsapi.org/v2/sources?apiKey=e52ac532f5764bebab21059964519cbc`);
  }

  getArticles(source: string) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=e52ac532f5764bebab21059964519cbc`);
  }
}
