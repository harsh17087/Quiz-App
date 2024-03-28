import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  signUpForm:any
 
  constructor(private fb:FormBuilder){}
 
  ngOnInit(){
    this.signUpForm=new FormGroup({
      fname:new FormControl("",[Validators.required,Validators.pattern("^[A-Za-z ]{3,20}$")]),
      uemail:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      numb:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
      ugen:new FormControl("",),
      upass:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")]),
      upass2:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")]),
      // term:new FormControl("",[Validators.requiredTrue])
 
    })
  }
  submitData(){
    console.log(this.signUpForm.value)
  }

}
