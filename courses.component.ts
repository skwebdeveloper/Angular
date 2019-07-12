import { Component } from '@angular/core';

@Component({
 selector: 'courses',
 template: '<h2>{{ "Title : " + title }}</h2>' // {{}} this is called Interpolation
})
export class CoursesComponent{
   title = 'List of all titles';
}
