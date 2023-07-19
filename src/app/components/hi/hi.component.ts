import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {
  textFromHello!: string;
  constructor(private _dataService: DataService){

  }

  ngOnInit(): void {
    this.textFromHello = this._dataService.getTextFromHello();
    // console.log('textFromHello', this.textFromHello);
  }



}
