import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { Robot } from '../models/robot.model';

@Injectable({
 providedIn: 'root'
})
export class RobotsService {
  private robotsUrl = 'api/robots';  // URL to web api

  constructor(private http: HttpClient) { }

  getRobots(): Observable<Robot[]> {
    return this.http.get<Robot[]>(this.robotsUrl)
  }
}
