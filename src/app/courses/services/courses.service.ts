import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  ObterTodos(): Course[] {
    return [
      { _codigo: 1, nome: 'Angular', categoria: 'Angular' }
    ]
  }
}
