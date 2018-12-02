import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';

import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path:'Home', component: HomeComponent},
      {path:'', redirectTo:'Home',pathMatch:'full'},
      {path :'About', component: AboutComponent},
      {path :'Project', component: ProjectComponent},
      {path :'Resume', component:ResumeComponent},
      {path : 'Contact', component:ContactComponent},
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
