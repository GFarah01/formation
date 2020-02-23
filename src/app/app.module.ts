import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AuthentificationModule} from './authentification/authentification.module';
import { HomeComponent } from './home/home.component';
import { importType } from '@angular/compiler/src/output/output_ast';

import {MenuModule} from './menu/menu.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthentificationModule,
    MenuModule,
    UserModule,
    ProductModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
