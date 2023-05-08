import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResumeComponent } from './resume/resume.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CommunicationComponent } from './communication/communication.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResumeComponent,
    NavbarComponent,
    ProjectsComponent,
    HomeComponent,
    BlogsComponent,
    CommunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
