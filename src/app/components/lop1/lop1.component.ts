import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lop1',
  template: `
    <h1>Sinh viên lớp 1: {{name}}</h1>
  `
})
export class Lop1Component implements OnInit {
  name: string = 'Phạm Quang Tuấn'

  constructor(private sinhvien: DataService){
  }

  ngOnInit(): void {
    this.sinhvien.setSinhVien(this.name);  
    console.log(this.sinhvien.getSinhVien());
  }

}
