import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormControlName } from '../../../node_modules/@angular/forms';
import { StoreService } from '../shared/store.service';



@Component({
  selector: 'app-addsprint',
  templateUrl: './addsprint.component.html',
  styleUrls: ['./addsprint.component.css']
})
export class AddsprintComponent implements OnInit {
  sprintForm:FormGroup;
  data=this.store.data;
  sprint=this.store.sprint;
  constructor(private store:StoreService) {
   
   }

  ngOnInit() {
    this.sprintForm = new FormGroup({
        
        'Sname': new FormControl(null, [Validators.required]),
        'sid': new FormControl(null, [Validators.required]),
        'Desc': new FormControl(null, [Validators.required]),
        'Task':new FormArray([new FormGroup({
          tid:new FormControl(null, [Validators.required]),
          Name:new FormControl(null, [Validators.required]),
          Desc:new FormControl(null, [Validators.required]),
          Estimatedtime:new FormControl(null, [Validators.required]),
          status:new FormControl('todo'),
          Timegroup:new FormArray([])
    
        })])
      
      })
      // 'tasks': new FormArray([])
      

    
  }
  onaddtasks() {
   
    (<FormArray>this.sprintForm.get('Task')).push(new FormGroup({
      tid:new FormControl(null, [Validators.required]),
      Name:new FormControl(null, [Validators.required]),
      Desc:new FormControl(null, [Validators.required]),
      Estimatedtime:new FormControl(null, [Validators.required]),
      status:new FormControl(null, [Validators.required])

    }));

  }
  onsubmit(){
  console.log(this.sprintForm.value);
  this.store.addNewSprint(this.data,this.sprintForm.value)
  console.log(this.store)
  }
 
}
