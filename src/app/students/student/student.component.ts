import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/student.service';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  data :any = [];
  constructor(public service: StudentService ) {
    this.service.getData().subscribe(data=>{
      console.warn(data);
      this.data = data ; 
    })
   }  
  toppings = new FormControl();
  slots = new FormControl();
   selcted_course :string;
   date_selected:string;
  //slots:any = this.data;
  //slot_temp :any = this.slots.slot;
  toppingList: string[] = ['Scratch Junior','Python','Game Development','App Development','Web Development'];
  ngOnInit(): void {
  }
  
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  

}
