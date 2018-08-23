import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http'
import { INotes } from '../notes';


@Injectable()

export class HeroService {

  private headers: HttpHeaders;
  private accessPointUrl: string = "https://localhost:44346/api/Notes";

  constructor(private http : HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  get(){
    return this.http.get(this.accessPointUrl, { headers :this.headers });
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
  }

  public remove(id : number) {
    return this.http.delete(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, {headers: this.headers});
  }

}
