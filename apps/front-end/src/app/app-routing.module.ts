import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { TeacherFileComponent } from './teacher-file/teacher-file.component';
import { TeacherFileViewComponent } from './teacher-file-view/teacher-file-view.component';


//import { LoginComponent } from '@workshop/ui-login';


const routes: Routes = [
    // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    // { path: 'pfefile', loadChildren: () => import('./pfe-file/pfe-file.module').then(m => m.PfeFileModule) },
    // { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
    { path : 'category',component : CategoryComponent},
    { path : 'pfefile',component : TeacherFileComponent},
    { path : 'details/:id',component : TeacherFileViewComponent},



    //{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
