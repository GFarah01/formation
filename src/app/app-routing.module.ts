import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ProductListComponent } from './product/product-list/product-list.component';


const routes: Routes = [
 {path: '', redirectTo:'home', pathMatch:'full'},
 {path: 'login', component: LoginComponent},
 {path: 'home' , component:HomeComponent,
  children:[
    {path:'', component : ListUserComponent},
    {path:'listUser', component: ListUserComponent},
    {path:'listProduit', component: ProductListComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
