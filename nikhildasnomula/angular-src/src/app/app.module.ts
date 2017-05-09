import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule} from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { SelfdevelopmentComponent } from './components/selfdevelopment/selfdevelopment.component';
import { UsComponent } from './components/us/us.component';
import { TravelComponent } from './components/travel/travel.component';
import { BlogComponent } from './components/blog/blog.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {
    path: 'blog/:title',
    component: BlogComponent,
    //data: {title: "Calisthenics"}
  },
  {path: 'selfdevelopment', component: SelfdevelopmentComponent},
  {path: 'us', component: UsComponent},
  {path: 'travel', component: TravelComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutmeComponent,
    TechnologyComponent,
    SelfdevelopmentComponent,
    UsComponent,
    TravelComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
