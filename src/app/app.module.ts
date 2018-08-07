import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { AppComponent } from './app.component';
import { StoreService } from './shared/store.service';
import { ProjectComponent } from './project/project.component';
import { Routes, RouterModule } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { SprintComponent } from './sprint/sprint.component';
import { TodoComponent } from './todo/todo.component';
import { AddsprintComponent } from './addsprint/addsprint.component';
import { ContainerComponent } from './container/container.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { IncontainerComponent } from './incontainer/incontainer.component';
import { DoneComponent } from './done/done.component';
import { DonecontainerComponent } from './donecontainer/donecontainer.component';
import { BacklogComponent } from './backlog/backlog.component';
import { BackcontainerComponent } from './backcontainer/backcontainer.component';
import { EditsprintComponent } from './editsprint/editsprint.component';
const routes:Routes=[{path:'project',component:ProjectComponent},
{path:'',redirectTo:'/project',pathMatch:'full'},
{
  path:'add',component:AddprojectComponent},
{path:'edit',component:EditComponent},
{path:"sprint",component:SprintComponent},
{path:"addsprint",component:AddsprintComponent}]
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AddprojectComponent,
    EditComponent,
    SprintComponent,
    TodoComponent,
    AddsprintComponent,
    ContainerComponent,
    InprogressComponent,
    IncontainerComponent,
    DoneComponent,
    DonecontainerComponent,
    BacklogComponent,
    BackcontainerComponent,
    EditsprintComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    Angular2FontawesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
