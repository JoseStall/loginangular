import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListusersComponent } from './users/components/listusers.component';
import { LoginComponent } from './users/login.component';
import { UserService } from './users/service/userservice.service';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users', canActivate: [UserService], component: ListusersComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CoreRootingModule { }
