import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  title="Xin chào, mình là Child Component";

  @Input() text!: string;
  
  // clicked là 1 variable
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
  
  clickButton(){
    this.text = "Child Component sau khi click";
    // biến click nhả ra biến text
    this.clicked.emit(this.text);
  }

}
