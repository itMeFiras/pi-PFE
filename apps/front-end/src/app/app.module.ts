
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@workshop/material';
import { UiLoginModule } from '@workshop/ui-login';
import { UiHeaderModule } from '@workshop/ui-header';
import { UiFooterModule } from '@workshop/ui-footer';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { CategoryComponent } from './category/category.component';
import { TeacherFileComponent } from './teacher-file/teacher-file.component';
import { TeacherFileViewComponent } from './teacher-file-view/teacher-file-view.component';
import { CategoryModule } from './category/category.module';
import { TeacherFileModule } from './teacher-file/teacher-file.module';




@NgModule({
  declarations: [AppComponent, CategoryComponent, TeacherFileComponent, TeacherFileViewComponent],
  imports: [
    BrowserModule,
    FormsModule,
    
    HttpClientModule,
    NxModule.forRoot(),
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MaterialModule,

    UiLoginModule,
    UiHeaderModule,
    UiFooterModule,
    AppRoutingModule,
    CategoryModule,
    TeacherFileModule

  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
