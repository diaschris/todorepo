import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '../../../node_modules/@angular/forms';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  
 taskForm:FormGroup
 
  constructor(private store:StoreService) { }

  ngOnInit() {
    
    this.taskForm = new FormGroup({
    
        tid:new FormControl(Math.random().toString(36).substr(2,7), [Validators.required]),
        Name:new FormControl(null, [Validators.required]),
        Desc:new FormControl(null, [Validators.required]),
        Estimatedtime:new FormControl(null, [Validators.required]),
       status:new FormControl("todo"),
        Timegroup:new FormArray([])

    
    })  
}
onsubmit(){
 
  this.store.addNewTask(this.store.sprint,this.store.sprint1,this.taskForm.value)
 
  }

}
