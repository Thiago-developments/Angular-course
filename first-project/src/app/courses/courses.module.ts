import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses/courses.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesComponent],
  exports:[
    CoursesComponent
  ]
})
export class CoursesModule { }
