import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BasicsComponent } from './basics/basics.component';
import { SearchComponent } from './product-list/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { ApiComponent } from './api/api.component';
import { HttpServicesService } from './Services/http-services.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    SearchBarComponent,
    ProductListComponent,
    BasicsComponent,
    SearchComponent,
    ExampleComponent,
    ApiComponent,
    ContactFormComponent,
    HomeComponent,
    AlertBoxComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFor,
    ReactiveFormsModule,
    BrowserAnimationsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
