import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root' 
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    let url = "https://script.googleusercontent.com/macros/echo?user_content_key=8ut7Czbpy8KvpveF7qzy5l2NGZtzb3X0M5bf-6RgajnCeM2Xt5W26SdhndK2X0C2r9IM0qjF_ApEH2yUz9YNzbpb64GI5zCom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC09Nb0QZ6ca_LU0vmo6mSiQ7SyFG3CgdL9-1Vgcha-TAYaAGhh-9xNG-9rMNEZHQRElvdDletx0&lib=MlJcTt87ug5f_XmzO-tnIbN3yFe7Nfhi6";
    return this.http.get(url);
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    parentname: new FormControl('', Validators.required),
    parentemail: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    childname: new FormControl(''),
    childage: new FormControl(''),
    course: new FormControl(''),
    date: new FormControl(''),
    slot: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      parentname: '',
      parentemail: '',
      mobile: '',
      childname: '',
      childage: '',
      course: '',
      date: '',
      slot: ''
    });
  }
}