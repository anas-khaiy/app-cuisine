import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { LoginComponent } from './contact/login/login.component';
import { RegisterComponent } from './contact/register/register.component';
import { CuisineComponent } from './copmonents/cuisine/cuisine.component';
import { PatisserieComponent } from './copmonents/patisserie/patisserie.component';
import { SaladeComponent } from './copmonents/salade/salade.component';
import { ShowallComponent } from './copmonents/showall/showall.component';
import { NewsComponent } from './News/news/news.component';

const routes: Routes = [

  {path:"",component:ShowallComponent},
  {path:"patisserie",component:PatisserieComponent},
  {path:"salade",component:SaladeComponent},
  {path:"cuisine",component:CuisineComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"Contact",component:ContactComponent},
  {path:"News",component:NewsComponent},
  {path:"About",component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
