import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import {RectangleService} from "../../controller/rectangle.service"
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  standalone:true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule]
})

export class ViewComponent  implements OnInit {
  rectangleForm! : FormGroup;
  rectangles!: any [];

  constructor(private recservice: RectangleService, private fb: FormBuilder) {
    this.rectangleForm = this.fb.group({
      a: ['4', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      b: ['5', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
    })

  }

  ngOnInit() {


  }
  add(rectangleForm: any) {
    this.recservice.add(rectangleForm.a, rectangleForm.b);
    this.rectangles = this.recservice.rectangles;
  }

}
