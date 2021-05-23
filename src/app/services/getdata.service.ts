import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  private url = 'https://swapi.dev/api/people/';

  getData(): Observable<any> {
    return this.client.get(this.url);
  }

  constructor(private client: HttpClient) {}
}
