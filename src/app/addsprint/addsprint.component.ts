import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '../../../node_modules/@angular/forms';
import { StoreService } from '../shared/store.service';
import { Router } from '../../../node_modules/@angular/router';



@Component({
  selector: 'app-addsprint',
  templateUrl: './addsprint.component.html',
  styleUrls: ['./addsprint.component.css']
})
export class AddsprintComponent implements OnInit {

  sprintForm:FormGroup;
  data=this.store.data;
  sprint=this.store.sprint;
 
  constructor(private store:StoreService,private route:Router) {
   
   }

  ngOnInit() {
    // this.store.getAllsprint(this.data)
   
    this.sprintForm = new FormGroup({
        
        'Sname': new FormControl(null, [Validators.required]),
        'sid': new FormControl(Math.random().toString(36).substr(2,7), [Validators.required]),
        'Desc': new FormControl(null, [Validators.required]),
        'Task':new FormArray([new FormGroup({
          tid:new FormControl(Math.random().toString(36).substr(2,7), [Validators.required]),
          Name:new FormControl(null, [Validators.required]),
          Desc:new FormControl(null, [Validators.required]),
          Estimatedtime:new FormControl(null, [Validators.required]),
          status:new FormControl('todo'),
          Timegroup:new FormArray([])
    
        })])
      
      })
      // 'tasks': new FormArray([])
      

    
  }
  // get formData() { return this.sprintForm.get('Task'); }
  onaddtasks() {
   
    (<FormArray>this.sprintForm.get('Task')).push(new FormGroup({
      tid:new FormControl(Math.random().toString(36).substr(2,7), [Validators.required]),
      Name:new FormControl(null, [Validators.required]),
      Desc:new FormControl(null, [Validators.required]),
      Estimatedtime:new FormControl(null, [Validators.required]),
      status:new FormControl('todo', [Validators.required]),
      Timegroup:new FormArray([])

    }));

  }
  
  onsubmit(){

  this.store.addNewSprint(this.data,this.sprintForm.value)
  this.sprintForm.reset();
  this.route.navigate(['/sprint'])
  }
 
}
