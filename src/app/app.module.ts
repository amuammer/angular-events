import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: AddEventComponent },
  { path: 'addevent', component: AddEventComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    EventsComponent,
    AddEventComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
