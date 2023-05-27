import { Component } from '@angular/core';
import { RectangleMVVM } from './model/rectangle';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  rectangle!:RectangleMVVM;

  constructor() { }

  ras(a: any, b: any) {
    if (a>=0 && b>0) {
      this.rectangle = new RectangleMVVM(a, b);  
    }
    else {
      this.rectangle = new RectangleMVVM(0, 0);  
      console.log("Неправильне значення");
    }
    this.rectangle.P();
    this.rectangle.S();
  }
}
