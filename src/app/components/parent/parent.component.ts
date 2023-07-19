import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  title = 'Xin chào, mình là Parent Component';

  onButtonClicked(){
    this.title = 'Parent Component sau khi click';
  }

  clickFromChild(event: string){
    this.title = event;
  }
}
