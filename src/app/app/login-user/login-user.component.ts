import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalService } from '../../shared/services/global.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  userData:any
  userDb:any=[]
  constructor(private _globalSer:GlobalService, private _router:Router){}

  ngOnInit(){
    this.userData=new FormGroup({
      userId:new FormControl(""),
      userPass:new FormControl("")
    })
  }

  checkData(){
    // console.log(this.userData.value)
    this._globalSer.getRequest("users").subscribe((res)=>{
      this.userDb=res.data
      // console.log(this.userDb)
      const data=this.userDb.filter((val:any)=>{return val.email==this.userData.value.userId && val.password==this.userData.value.userPass})
      
      if(data.length>0){
        this._globalSer.signIn(this.userData.value.userId)
        this._router.navigate(['examdash'])
      }else{
        window.alert("Invalid Credential")
      }
    })
  }
}
