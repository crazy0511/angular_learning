import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to Angular</h1>
    <!-- Cách viết 1 -->
    <h2>Tôi {{title}} </h2>
    <!-- Cách viết 2 -->
    <h2 [textContent]="title"></h2>
    <!-- Cách viết 3 -->
    <h2 [ngStyle]="{color: textColor, background: backgroundColor}">{{title}}</h2>
    <!-- Cách viết 4 -->
    <h2 [ngStyle]="styleObj">{{title}}</h2>
    <!-- <img src="{{imageSrc}}">
    <img [src]="imageSrc"> -->
    <p>--------------------------------------------------------------------------------------------------</p>

    <!-- Event Binding -->
    <!-- <h2>App Component - Parent </h2>
    <button type="button" (click)="onButtonClick()" [class.chinhmau]="isChinhMau">{{isChinhMau ? "Hide" : "Show"}}</button>
    <h3>{{title}}</h3>
    <p>--------------------------------------------------------------------------------------------------</p>
    <app-hello [text]="title" (buttonClicked)="onButtonClickedFromHello($event)"></app-hello>
    <p>--------------------------------------------------------------------------------------------------</p>
    <p>--------------------------------------------------------------------------------------------------</p>
    <p>--------------------------------------------------------------------------------------------------</p>
    <app-parent></app-parent>
    <p>--------------------------------------------------------------------------------------------------</p>
    <p>--------------------------------------------------------------------------------------------------</p> -->


    <!-- <app-hello></app-hello>
    <p>--------------------------------------------------------------------------------------------------</p>
    <app-hi></app-hi> -->

    <app-lop1></app-lop1>
    <app-lop2></app-lop2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bắt đầu học Property Binding';
  imageSrc = 'https://haycafe.vn/wp-content/uploads/2022/03/Anh-meo-bua-cuc-buon-cuoi.jpg';
  textColor = "green";
  backgroundColor = "black";

  styleObj = {
    color: this.textColor,
    background: this.backgroundColor
  }

  isChinhMau = true;

  onButtonClick(){
    console.log('Button clicked!');
    // alert('Bạn đã submit thành công');
    this.isChinhMau = !this.isChinhMau;
    this.title = 'Change from App Component';
  }

  onButtonClickedFromHello(event: string){
    this.title = event;
  }
}
