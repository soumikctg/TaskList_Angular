import { Component } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-head-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './head-section.component.html',
  styleUrl: './head-section.component.css'
})
export class HeadSectionComponent {
  title = 'Task Tracker';

  toggleAddTask(){
    console.log('toggle')
  }
}
