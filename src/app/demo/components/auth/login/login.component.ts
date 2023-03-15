import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { ReCaptchaV3Service } from 'ngx-captcha';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  credentials: any;
  token: string = 'dfghjklkjhgf';
  passType: string = 'password';
  isPassHide: boolean = false;
  siteKey: string = '6Le9IOskAAAAADqGi96dH1vOU-jL2gIO2DceyK9H';
  recaptchaValue: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private reCaptchaV3Service: ReCaptchaV3Service,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      recaptcha: ['', Validators.required],
    });
  }

  onSubmit(event: any) {
    debugger;
    console.log(event);

    this.credentials = {
      username: event.controls.email.value,
      password: event.controls.password.value,
      organization: 'DIPLOME'
    };
    this.recaptchaValue = event.controls.recaptcha.value;

    if (this.ValidateCredentials()) {
      this.authService.postRequest('post', 'certify/authentication/operator', this.credentials).then((response:any)=>{
        if(response.data.resultStatus.errorCode){
            this.messageService.add({
                severity: 'error',
                summary: 'Invalid Credentials',
              });
            return;
        }
        
        this.messageService.add({
          severity: 'success',
          summary: 'Successfully Logged In',
        });
        localStorage.setItem('token', response?.data?.token);
        localStorage.setItem('logged_in_user_data', JSON.stringify(response?.data?.data));
        localStorage.setItem('organization', JSON.stringify(response?.data?.data));
        this.router.navigate(['/uikit/table'])
      }).catch(()=>{
        this.messageService.add({
          severity: 'error',
          summary: 'Invalid Credentials',
        });
      })

      //hit api end point here
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid Credentials',
      });
    }
  }

  ValidateCredentials(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(this.credentials.username) && this.recaptchaValue && this.credentials.password) {
      return true;
    }
    return false;
  }

  get f() {
    return this.loginForm.controls;
  }

  changePasswordType() {
    this.isPassHide = !this.isPassHide;
    this.isPassHide ? (this.passType = 'password') : (this.passType = 'text');
  }

  onReCaptchaResolved(token: string) {
    this.token = token;
  }
}
