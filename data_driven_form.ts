import { Component } from '@angular/core';
import {StudentService} from './student.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'data-driven',
  template: `
  <form [formGroup]="myForm" (ngSubmit)="onsubmit()">
  Name <input type="text" formControlName="name"><br>
  <p *ngIf="myForm.controls.name.errors">Required</p>
  Email <input type="text" formControlName="email"><br>
  <p *ngIf="myForm.controls.email.errors">Required</p>
  Post <input type="textarea" formControlName="post"><br>
  <p *ngIf="myForm.controls.post.errors">Required</p>
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
<button type="submit" class="btn btn-primary" (click)="getData()" >Get data</button>
 <h3>Username: {{data.usernane}}  Email:{{data.email}}</h3>
 <ul >
 <li *ngFor="let post of posts">{{post.title}}</li>
 
 </ul>


  `
})
export class DataDrivenComponent {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private ss:StudentService) {
    

    this.myForm = formBuilder.group({
        "name":["",Validators.required],
        'email': ['', [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]],
    "post":["",Validators.required]
      
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
    //this.getData();
    
  }

  
  onsubmit() {
    console.log(this.myForm);
  }
  posts;
  data;
  getData()
  {

    this.ss.getPosts().subscribe(x=>this.posts=x.json());
    this.ss.getUser().subscribe(x=>this.data=x.json());
  }
 
}
