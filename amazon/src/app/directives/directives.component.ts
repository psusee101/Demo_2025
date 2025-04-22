import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  showSelection = true;
  showText = true;
  items=['Apple','Banana','Mangao'];

  toggleText(){
    this.showText = !this.showText;
  }

  isHighlighted = true;
  textColor = 'red';

  toggleHighlight(){
    this.isHighlighted = !this.isHighlighted;
    this.textColor = this.textColor === 'red'?'green':'red';

  }

}
