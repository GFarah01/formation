import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';

import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ListUserComponent, AddUserComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserModule { }
