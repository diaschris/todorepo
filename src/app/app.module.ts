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
import {AngularFireAuthModule} from 'angularfire2/auth';
import { BackcontainerComponent } from './backcontainer/backcontainer.component';
import { EditsprintComponent } from './editsprint/editsprint.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AngularFireModule } from '../../node_modules/angularfire2';
import { config } from './app.firebase.config';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
const routes:Routes=[
{path:"welcome",component:WelcomeComponent},
{path:'project',canActivate:[AuthGuard],component:ProjectComponent},
{path:'',redirectTo:"/welcome",pathMatch:'full'},
{
  path:'add',canActivate:[AuthGuard],component:AddprojectComponent},
{path:'edit',canActivate:[AuthGuard],component:EditComponent},
{path:"sprint",canActivate:[AuthGuard],component:SprintComponent},
{path:"addsprint",canActivate:[AuthGuard],component:AddsprintComponent},
{path:"editsprint",canActivate:[AuthGuard],component:EditsprintComponent},
{path:"addtask",canActivate:[AuthGuard],component:AddtaskComponent},
{path:"signin",component:SigninComponent
},
{path:"signup",component:SignupComponent
}]
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
    EditsprintComponent,
    AddtaskComponent,
    SigninComponent,
    SignupComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    Angular2FontawesomeModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)

    
  ],
  providers: [StoreService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
