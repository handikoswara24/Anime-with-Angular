import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getTest(): Observable<any> {
    return this.httpClient.get('https://api.jikan.moe/v3/anime/527');
  }

  getAnime(anime: string) {
    let params1 = new HttpParams().set('q', anime);
    return this.httpClient.get('https://api.jikan.moe/v3/search/anime', { params: params1 });
  }

  getAnimeDetail(anime: string) {
    let url = 'https://api.jikan.moe/v3/anime/' + anime;
    return this.httpClient.get(url);
  }
}
