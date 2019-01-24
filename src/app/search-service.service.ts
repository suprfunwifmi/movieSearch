import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from './SearchResult';
import { map } from 'rxjs/operators';


const OMDB_API_KEY = '';
const OMDB_API_URL = 'http://www.omdbapi.com';
const params = ['', ''];
const queryUrl = '{OMDB_API_URL}{PARAMS}';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  constructor(private http: HttpClient) { }

  search(query: string): Observable<SearchResult[]> {
    params.join('&');

    return this.http.get(queryUrl).pipe(map(response => {
      return response['items'].map(item => {
        return new SearchResult({
          id: item.id,
          title: item.snippet.title
        });
      });
    }));
  }
}
