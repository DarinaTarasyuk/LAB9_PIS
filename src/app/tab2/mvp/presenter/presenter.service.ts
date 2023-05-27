import { Injectable } from '@angular/core';
import { IRectangleView } from '../view/IrectangleView';
import { RectangleMVP } from '../model/rectangle';
@Injectable({
  providedIn: 'root'
})
export class PresenterService {
  rectangle!: RectangleMVP;
  view!: IRectangleView;

  loadTriangle(a: number, b: number, view: IRectangleView) {
    this.view = view;
    this.rectangle = new RectangleMVP(a, b);
    // логіка обробки даних тут 
    this.rectangle.S();
    this.rectangle.P();
    this.view.a = "Сторона a = " + this.rectangle.a;
    this.view.b = "Сторона b = " + this.rectangle.b;
    this.view.p = "Периметр P = " + this.rectangle.p.toFixed(2);
    this.view.s = "Площа S = " + this.rectangle.s.toFixed(2);
  }
  constructor() {

  }
}