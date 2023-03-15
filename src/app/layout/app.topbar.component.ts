import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls:['./app.topbar.component.scss']
})
export class AppTopBarComponent {

    items!: MenuItem[];
    showLogout:boolean=false;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,private router:Router) { }

    showLogoutBox(){
      this.showLogout= !this.showLogout;
    }

    ngOnInit() {
      this.items = [
          {label: 'Sign out',
           icon: 'pi pi-fw pi-sign-out',
           command: () => {
            this.logout();
        }
          },
         
      ];
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('organization');

    localStorage.removeItem('_grecaptcha');
    localStorage.removeItem('logged_in_user_data');
    this.router.navigate(['/auth/login']);
      }
}
