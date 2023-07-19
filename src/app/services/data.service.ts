import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _textFromHello!: string;

  getTextFromHello(): string{
    return this._textFromHello;
  }

  setTextFromHello(text: string){
    this._textFromHello = text;
  }


  // Get Set Sinh viên
  private sinhvien!: string;
  getSinhVien(): string{
    return this.sinhvien;
  }

  setSinhVien(sinhvien: string){
    this.sinhvien = sinhvien;
  }
}
