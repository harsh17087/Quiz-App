import { Routes } from '@angular/router';
import { LoginUserComponent } from './app/login-user/login-user.component';
import { ExamdashComponent } from './app/examdash/examdash.component';
import { QuizappdashComponent } from './app/quizappdash/quizappdash.component';
import { ExamliveComponent } from './app/examlive/examlive.component';
import { MaindashComponent } from './app/maindash/maindash.component';
import { authGuard } from './shared/guards/auth.guard';
import { RegisterUserComponent } from './app/register-user/register-user.component';

export const routes: Routes = [

    {path : "", redirectTo:"quiz", pathMatch:"full"},
    {path:"quiz", component:LoginUserComponent},
    {path:"examdash", component:ExamdashComponent},
    {path:"quizappdashboard", component:QuizappdashComponent},
    {path:"check", component:RegisterUserComponent},
    {path:"examlive", component:ExamliveComponent},
    {path:"maindash", component:MaindashComponent,children:[
        // add canActivate:[authGuard] in maindash later
        {path:"exam", loadChildren:()=> import('./app/exam/exam.module').then((c)=>c.ExamModule)},
        {path:"voucher", loadChildren:()=> import('./app/voucher/voucher.module').then((s)=>s.VoucherModule)},
        {path:"result", loadChildren:()=> import('./app/result/result.module').then((f)=>f.ResultModule)},
        {path:"question", loadChildren:()=> import('./app/question/question.module').then((f)=>f.QuestionModule)},
    ]},

];
