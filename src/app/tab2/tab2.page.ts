import { Component } from '@angular/core';
import { IRectangleView } from './mvp/view/IrectangleView';
import { PresenterService } from './mvp/presenter/presenter.service';
import { rectangleView } from './mvp/view/rectangleview';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  view!: IRectangleView;
  constructor(private pr: PresenterService) {
    this.view = new rectangleView();
  }

  ras(a: any, b: any) {
    if (a>0 && b>0 ) this.pr.loadTriangle(a, b, this.view);
    else {
      throw "Неправильне значення";
    } 
  }
}