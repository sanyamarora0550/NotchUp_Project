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
  sl:any = [] ;
   obj2:any ;
   obj3:any;
   obj :any ;
   selected:any;
   final_obj:any;
   fii:any = [];
   A:any;
  constructor(public service: StudentService ) { 
    this.service.getData().subscribe(data=>{
  //    console.warn(data);
      this.data = data ; 
      this.data.forEach((item,index)=>{
    
        this.obj = {
          id: item.course_name,
          slot : {
            slot:item.slots,
          }
        }
        
        this.obj2 = {
          val : this.obj.slot.slot,
        }
        
        this.obj3 = {
          fi : this.obj2.slots,
        }
        this.sl.push(this.obj);
      });
      
      this.sl.forEach((item,index)=>{ 
        this.final_obj={
          id:item.id,
          slot:{
           vals: item.slot,
        }
      }
      this.fii.push(this.final_obj);
      });
      
      this.A=this.data;
    //  for(var i = 0 ; i<size(A);


      console.log(this.fii);


     // aler(JSON.stringify(this.sl)); 
    });
   }  
  
  toppings = new FormControl();
  slots = new FormControl();
   selcted_course :string;
   date_selected:string;
  //slots:any = this.data;
  //slot_temp :any = this.slots.slot;
  toppingList:any = ['Scratch Junior','Python','Game Development','App Development','Web Development'];
  ngOnInit(): void {
  }
  
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  

}
