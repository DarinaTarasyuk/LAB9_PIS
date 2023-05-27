import { Injectable } from '@angular/core';
import {Rectangle} from "../model/rectangle"

@Injectable({
  providedIn: 'root'
})
export class RectangleService {
  rectangles: Rectangle[] =[];

  constructor() { }

  add(a:number, b:number){
    let r = new Rectangle(a,b);
    r.P();
    r.S();
    this.rectangles.push(r);
  }
}
