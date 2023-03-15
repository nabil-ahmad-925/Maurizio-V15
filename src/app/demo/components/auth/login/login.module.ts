import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { NgxCaptchaModule } from 'ngx-captcha';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { AuthRoutes } from 'src/app/auth/auth.routes';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
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
    ],
    declarations: [LoginComponent],providers:[MessageService]
})
export class LoginModule { }
