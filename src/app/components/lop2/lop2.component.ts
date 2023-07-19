import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lop2',
  template: `
    <h1>Sinh viên lớp 2: {{name}}</h1>
  `
})
export class Lop2Component implements OnInit{
  name: string = "Không tên";

  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    // this.name = this.sinhvien.getSinhVien();
    this.dataService.sinhvienObservable.subscribe(sinhvien => this.name = sinhvien);
  }

}
