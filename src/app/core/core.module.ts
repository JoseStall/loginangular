import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreRootingModule } from './core-rooting.module';
import { ListusersComponent } from './users/components/listusers.component';
import { UserService } from './users/service/userservice.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { LoginService } from './users/login.service';
import { LoginComponent } from './users/login.component';




@NgModule({
  imports: [
    CommonModule,
    CoreRootingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UserService,
    LoginService
  ],
  exports: [
    ListusersComponent,
    RouterModule
  ],
  declarations: [
    ListusersComponent,
    LoginComponent
  ]
})
export class CoreModule { }
