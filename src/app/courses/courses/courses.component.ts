import { Component } from '@angular/core';

import { CoursesService } from '../services/courses.service';
import { Course } from './../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[];

  constructor(private coursesService: CoursesService){
    this.courses = this.coursesService.ObterTodos();
  }

  displayColumns = ['_codigo', 'nome', 'categoria'];

}
