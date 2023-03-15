import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
           
            {
                label: 'Activities',
                items: [
                     { label: 'Publishing Requests', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/table'] },
                     { label: 'Completed Requests', icon: 'pi pi-fw pi-book', routerLink: ['/uikit/completed'] },
                
                    
                ]
            },
           
 
          
          
        
        ];
    }
}
