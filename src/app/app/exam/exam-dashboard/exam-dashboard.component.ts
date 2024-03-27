import { Component } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam-dashboard.component.html',
  styleUrl: './exam-dashboard.component.css'
})
export class ExamDashboardComponent {
  examArray:any
  constructor(private _globalSer:GlobalService){}
  
  ngOnInit(){
    this._globalSer.getRequest('exams').subscribe((res)=>{
      this.examArray=res
      console.log(this.examArray)
    })
  }
}
