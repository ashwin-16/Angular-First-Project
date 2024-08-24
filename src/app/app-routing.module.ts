import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { BasicsComponent } from './basics/basics.component';
import { ApiComponent } from './api/api.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  {path:'home',component:HomeComponent},
  {path:'store',component:ApiComponent},
  {path:'product',component:BasicsComponent},
  {path:'about',component:ProductListComponent},
  {path:'contact',component:ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
