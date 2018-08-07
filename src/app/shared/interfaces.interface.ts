export interface Projects {
pid:string,
name:string,
description:string,
sprint:Sprint[]
}

export interface Sprint{
    sid:string,
    name:string,
    description:string,
    task:Task[]
}

export interface Task{
   tid:string,
    name:string,
    description:string,
    estimatedtime:Date,
    workhours:WorkHour[],
    status : "completed" | "todo" | "inprogress" | "backlogs";
    
}

export interface WorkHour{
    starttime:Date,
    endtime:Date
}




