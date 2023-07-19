import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lop2',
  template: `
    <h1>Sinh viên lớp 2: {{name}}</h1>
    <p>Example</p>
  `
})
export class Lop2Component implements OnInit{
  name!: string;

  constructor(private sinhvien: DataService){

  }

  ngOnInit(): void {
    this.name = this.sinhvien.getSinhVien();
  }

}
