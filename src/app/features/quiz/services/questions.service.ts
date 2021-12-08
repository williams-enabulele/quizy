import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Data } from '../models/data.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private http: HttpClient
    ) { }

  getQuestions(): Observable<Array<Data>> {
    return this.http
      .get<Array<Data>>(
        `${environment.BASE_URL + '?amount=10&category=28&type=multiple'}`
      );
  }
}
