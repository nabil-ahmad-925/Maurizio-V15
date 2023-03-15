import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutes } from './auth.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import { NgxCaptchaModule, ReCaptchaV3Service } from 'ngx-captcha';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

// import { NgxCaptchaModule } from 'ngx-captcha';
// import { ReCaptchaV3Service } from 'ngx-captcha';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthRoutes,  
    InputTextModule,
    FormsModule,
    ButtonModule,
    PasswordModule,
    RadioButtonModule,
    NgxCaptchaModule,
    ToastModule
    
  ],providers:[MessageService,ReCaptchaV3Service]
})
export class AuthModule { }
