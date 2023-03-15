import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },{
    
    path: 'register',
    component: RegisterComponent,
  },{
    
    path: 'forgot',
    component: ForgotPasswordComponent,
  }
];

export const AuthRoutes: ModuleWithProviders<any> = RouterModule.forChild(routes);