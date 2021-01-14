import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public getData(){ 
    return this.http.get("https://wookie.codesubmit.io/movies",{headers: {
      Authorization: `Bearer Wookie2019`,
    }});
  } 
  public search(word){ 
    return this.http.get("https://wookie.codesubmit.io/movies?q="+word,{headers: {
      Authorization: `Bearer Wookie2019`,
    }});
  } 
}
