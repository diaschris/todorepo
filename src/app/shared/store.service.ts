import { Injectable, ModuleWithComponentFactories } from '@angular/core';
// import { Sprint, Projects, WorkHour } from './interfaces.interface';
import { todo } from '../data/data';
import { Projects, Sprint, Task, Timegroup } from './interfaces.interface';

import * as moment from 'moment';
// import { allResolved } from '../../../node_modules/@types/q';




@Injectable({
    providedIn: 'root'
})
export class StoreService {
    i:number=3;
    todo: any[] = [];
    currentsp: any[] = [];
    data: any[] = [];
    data1: any[] = [];
    sprint: any[] = [];
    sprint1: number;
    state:boolean=false;
    constructor() { }

    getAllproject() {
        this.todo = todo.project;
        console.log(this.todo);
        this.todo.forEach((el)=>{
            let c=0
            el.Sprint.forEach((ele)=>{
              c=c+ele.Task.length;
            el.totaltask=c;
            console.log(c);
      
            })
          })

        return this.todo;

    }





    // ////////////////////project//////////////////////////

    addNewProject(pro) {
      
        this.todo.push(pro);
        this.getAllproject();


    }

    deleteProject(id) {
        const i = this.todo.findIndex((el) => el.pid === id);
        
        this.todo.splice(i, 1);
        return this.getAllproject();
    }

    editProject(id, data) {
        for (let i = 0; i < this.todo.length; i++) {
            if (id == this.todo[i].pid) {
                this.todo[i].Pname = data.Pname;
                this.todo[i].Desc = data.Desc;
                this.getAllproject();


            }
        }
    }


    getproject(id) {
        this.todo.forEach(element => {
            if (id == element.pid) {
                console.log(element);

            }


        });

    }
    /////////////////////////end project//////////////////////



    ////////////////////////////sprint////////////////////////////
    getAllsprint(pid) {
        console.log(this.todo)
        this.todo.forEach(element => {
            if (pid == element.pid) {
                this.currentsp = element.Sprint;

            }
        });
        return this.currentsp;
    }


    editSprint(id, stid, sprint) {
        this.getAllsprint(id);
        for (var i = 0; i < this.currentsp.length; i++) {
            if (this.currentsp[i].sid == stid) {
                this.currentsp[i].Sname = sprint.Sname;
                this.currentsp[i].Desc = sprint.Desc;
            }
        }
        console.log(this.currentsp, "after editing")
    }
    addNewSprint(pid, sprint) {
        this.getAllsprint(pid)
        console.log(this.currentsp, "hj")
        this.currentsp.push(sprint);
        console.log(this.currentsp, "after adding");
    }

    specificsprint: any[] = [];
    getsprint(pid, sid) {
        this.getAllsprint(pid);
        this.currentsp.forEach(element => {
            if (element.sid == sid) {
                console.log(element, "get specific sprint");
                this.specificsprint = element;
            }

        });
        return this.specificsprint;


    }





    deleteSprint(pid, sid) {
        let x=+sid;
        console.log(pid, "pid");
        console.log(sid, "sid");
        this.getAllsprint(pid);
        this.getAllTask(pid, x);

        const i = this.currentsp.findIndex((el) => el.sid === x);
        console.log(i)
        this.currentsp.splice(i, 1);
        this.currenttask.splice(i);
        console.log(this.todo, "after deleting")


    }

    ///////////////////////end task/////////////////////////
    currenttask: any;
    getAllTask(pid, sid) {
        this.getAllsprint(pid);
        this.currentsp.forEach(element => {
            if (sid == element.sid) {
                this.currenttask = element.Task;
                console.log(this.currenttask, "Task")
            }
        });
        return this.currenttask;
    }

    sptask: any[] = [];
    getSpecificTask(pid, sid, tid) {
        this.getAllTask(pid, sid);
        this.currenttask.forEach(element => {
            // console.log(tid, element.Id)
            if (tid == element.tid) {
                console.log(element, "specific task")
                this.sptask = element;
            }
        });
        return this.sptask;
    }
    fb: boolean = false;
    deleteTask(pid, sid, tid) {
        this.getAllTask(pid, sid);
        console.log(this.currenttask)
        for (var i = 0; i < this.currenttask.length; i++) {
            if (this.currenttask[i].tid == tid) {
                this.fb = true;
                this.currenttask.splice(i, 1);
            }
        }
    }



    editTask(pid, sid, tid, task) {
        this.getAllTask(pid, sid);
        for (var i = 0; i < this.currenttask.length; i++) {
            if (this.currenttask[i].Id == tid) {

                this.currenttask[i].Name = task.Name;
                this.currenttask[i].Desc = task.Desc;
            }
        }
        console.log(this.currenttask, "after editing")
    }


    addNewTask(pid, sid, task) {
        this.getAllTask(pid, sid);
        this.currenttask.push(task);
        console.log(this.currenttask, "after adding");
    }


    /////////////////end task///////////////////

    ////////////////////timegroup///////////////////

    workinghour: any[] = [];
    getAllworkhour(pid, sid, tid) {
        this.getSpecificTask(pid, sid, tid);
        this.currenttask.forEach(element => {
            if (tid == element.tid) {
                this.workinghour = element.Timegroup;
                console.log(this.workinghour, "all work hours");
            }
        });
    }
    complete_time: string;
    duration: any;
    newtime:any[]=[];
    start_time: string;
   
  








    
    onstart(pid, sid, tid) {
        // this.state=tr/ue;
        this.start_time = new Date().toLocaleTimeString();
        this.getAllTask(pid, sid);
        this.currenttask.forEach(element => {
            if (tid == element.tid) {
                this.state=true;
                element.status = "inprogress";
                console.log(this.currenttask, "Task")

                this.newtime = [{ "Starttime": this.start_time }]
                console.log(this.newtime, "Taskrrrr")
            }
        });
      
        

    }
   
    onComplete(pid, sid, tid) {
        // this.state=false;
        // let total=[];
        let hours=0;
        let minutes=0;

        this.complete_time = new Date().toLocaleTimeString();

        this.newtime = this.newtime.map((el) => {
            return { ...el, "Endtime": this.complete_time }
        })
        this.getAllTask(pid, sid);
        this.currenttask.forEach(element => {
            if (tid == element.tid) {
                this.state=false;
                element.status = "completed";
                this.newtime.forEach((el) => {
                    element.Timegroup.push(el);
                })
                element.Timegroup.forEach((ele)=>{ 
            
                    ele.Starttime = moment(ele.Starttime,"HH:mm:ss a")
                    ele.Endtime = moment(ele.Endtime, "HH:mm:ss a");
                    this.duration = moment.duration(ele.Endtime.diff(ele.Starttime));
                    hours = hours+parseInt(this.duration.asHours());
                    minutes = minutes+parseInt(this.duration.asMinutes()) % 60;
                })
                if (tid == element.tid) {
                element.hours=hours;
                element.minutes=minutes;
                
                }
              
               
            }
        });
       
    }




    // b:any[]=[];
    pause_time: any;

    onPause(pid, sid, tid) {
        this.pause_time = new Date().toLocaleTimeString();
        this.newtime = this.newtime.map((el) => {
            return { ...el, "Endtime": this.pause_time }
        })
        this.getAllTask(pid, sid);
        this.currenttask.forEach(element => {
            if (tid == element.tid) {
                element.status = "backlogs";
                this.newtime.forEach((el) => {
                    console.log(el, "ee")
                    element.Timegroup.push(el);
                })
            }
      })
    }
  

}



