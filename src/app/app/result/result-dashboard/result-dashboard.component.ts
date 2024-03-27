import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-result-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-dashboard.component.html',
  styleUrl: './result-dashboard.component.css'
})
export class ResultDashboardComponent {
  resultArray:any
  constructor(private _globalSer:GlobalService){}
  
  ngOnInit(){
    this._globalSer.getRequest('results').subscribe((res)=>{
      this.resultArray=res
      
    })
  }
}
