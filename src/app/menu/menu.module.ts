import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SideBarComponent, NavBarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports :[ 
    SideBarComponent, NavBarComponent, FooterComponent ]
})
export class MenuModule { }
