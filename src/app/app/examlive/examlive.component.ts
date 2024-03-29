import { Component } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-examlive',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './examlive.component.html',
  styleUrl: './examlive.component.css'
})
export class ExamliveComponent {
  questionArray:any
  temp:any
  correct:number=0
  showCorrect:boolean=false
  // constructor(private _globalSer:GlobalService){}
  constructor(private fb:FormBuilder, private _globalSer:GlobalService,private _route:Router){}


  // ngOnInit(){
  //   this.getData()
  // }

  getData(){
    this._globalSer.getRequest('questions').subscribe((res)=>{
      this.questionArray=res.data
      console.log(this.questionArray)
    })
  }

  answerForm:any
 
 
  ngOnInit(){
    this.getData()
    this.answerForm=new FormGroup({
      101:new FormControl(""),
      102:new FormControl(""),
      103:new FormControl(""),
      104:new FormControl(""),
      // markedAnswer5:new FormControl(""),
      // markedAnswer6:new FormControl(""),
      // markedAnswer7:new FormControl(""),
      // markedAnswer8:new FormControl(""),
      // markedAnswer9:new FormControl(""),
      // markedAnswer10:new FormControl(""),
      
      // term:new FormControl("",[Validators.requiredTrue])
 
    })
  }
  submitData(data:any){
    this.showCorrect=true
    console.log(this.answerForm.value)
    this.temp=this.answerForm.value
    
    for(let key in this.temp){
      if(key=='101' && this.temp[key]=='Tiger'){
        this.correct++
      }
      if(key=='102' && this.temp[key]=='Peacock'){
        this.correct++
      }
      if(key=='103' && this.temp[key]=='New Delhi'){
        this.correct++
      }
      if(key=='104' && this.temp[key]=='Jaipur'){
        this.correct++
      }
    }
    console.log(this.correct)
    // this._globalSer.postRequest('users',data).subscribe(()=>{
    //   window.alert("User Added successfully")
    //   this._route.navigate(["quiz"])
    // })
  }

}
