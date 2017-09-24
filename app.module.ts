import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule,FormGroup} from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import {StudentService} from './student.service';


import {DataDrivenComponent} from './data_driven_form';

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:"",redirectTo:"/home",pathMatch:"full"
      },
      {
        path:"home",component:DataDrivenComponent
      },
      
     { 
       path:"dataform",component:DataDrivenComponent
     }
    ])
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
