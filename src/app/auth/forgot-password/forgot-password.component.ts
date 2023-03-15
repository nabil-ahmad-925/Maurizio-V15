import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  loginForm!: FormGroup;
  credentials: any;
 

  constructor(private formBuilder: FormBuilder, private messageService:MessageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required]
      
    });
  }

  onSubmit(event: any) {
    console.log(event);

    this.credentials = {
      email: event.controls.email.value,
    
    };
   
    if (this.ValidateCredentials()) {
      this.messageService.add({
        severity: 'success',
        summary: 'Email sent',
      });
   
      //hit api end point here
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid Email',
      });
    }
  }

  ValidateCredentials(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(this.credentials.email)) {
      return true;
    }
    return false;
  }
  get f(){
    return this.loginForm.controls;
  }


}
