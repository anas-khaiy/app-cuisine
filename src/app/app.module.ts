import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './copmonents/titre/titre.component';
import { NavbarComponent } from './copmonents/navbar/navbar.component';
import { CuisineComponent } from './copmonents/cuisine/cuisine.component';
import { PatisserieComponent } from './copmonents/patisserie/patisserie.component';
import { SaladeComponent } from './copmonents/salade/salade.component';
import { ShowallComponent } from './copmonents/showall/showall.component';
import { RegisterComponent } from './contact/register/register.component';
import { LoginComponent } from './contact/login/login.component';
import { AboutComponent } from './about/about/about.component';
import { NewsComponent } from './News/news/news.component';
import { ContactComponent } from './contact/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    NavbarComponent,
    CuisineComponent,
    PatisserieComponent,
    SaladeComponent,
    ShowallComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
