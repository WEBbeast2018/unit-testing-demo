import { Injectable } from '@angular/core';
import { Part } from '../models/part.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  private partsUrl = 'api/parts';  // URL to web api

  constructor(private http: HttpClient) { }

  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.partsUrl)
  }
}
