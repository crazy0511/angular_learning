import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { DataService } from "src/app/services/data.service";

@Component({
    selector: 'app-hello',
    template: `
        <!-- <h2>Hello Component - Child</h2>
        <h3>{{text}}</h3>
        <button type="button" (click)="onButtonClicked()"> HelloComponent </button> -->
    `,
    

})
export class HelloComponent implements OnInit{
    @Input() text!: string;
    // Đối tượng EventEmitter này sẽ được sử dụng để phát ra sự kiện thông qua phương thức emit().
    @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor(private _dataService: DataService){
    }
    
    ngOnInit(): void {
        this._dataService.setTextFromHello(this.text);
        alert(this._dataService.getTextFromHello());
    }

    onButtonClicked(){
        this.text = 'Change from Hello Component';
        this.buttonClicked.emit(this.text);
    }
}