import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
//import { MaterialModule } from './material.module';
import {HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';  
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {StudentService} from './shared/student.service';
import {ReactiveFormsModule} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatGridListModule} from '@angular/material/grid-list'; 



import {MatListModule} from '@angular/material/list'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatNativeDateModule} from '@angular/material/core';
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    HttpClientModule ,
    MatListModule
    
    
  ], 
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
