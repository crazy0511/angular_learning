import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  // private sinhvien!: string;
  // getSinhVien(): string{
  //   return this.sinhvien;
  // }

  // setSinhVien(sinhvien: string){
  //   this.sinhvien = sinhvien;
  // }



  // Get Set Sinh viên
  // BehaviorSubject cũng là một đối tượng Observable
  // cho phép bạn đăng ký các subscriber và phát ra các giá trị tới các subscriber đó
  // BehaviorSubject như cái lỗ chảy nước ra khỏi bể
  private sinhvienSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // Gán textSinhVien thành sinhvien(chỉ đọc)
  sinhvienObservable: Observable<string> = this.sinhvienSubject.asObservable();

  // Hàm này dùng để cập nhật là giá trị của sinhvien = text
  setSinhVien(text: string){
    this.sinhvienSubject.next(text);
  }

}

