import { Component, Input, Output } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent {

  items: any;
  @Input() publishingRequest:any;
  @Output() back:any;
  cardMenu:any;
  displayCertificationModal:any;

  constructor(private layoutService:LayoutService){

  }

  ngOnInit() {

    
      this.items = [
          { label: 'Angular.io', icon: 'pi pi-external-link', url: 'http://angular.io' },
          { label: 'Theming', icon: 'pi pi-bookmark', routerLink: ['/theming'] }
      ];

      this.cardMenu = [
          {
              label: 'Save', icon: 'pi pi-fw pi-check'
          },
          {
              label: 'Update', icon: 'pi pi-fw pi-refresh'
          },
          {
              label: 'Delete', icon: 'pi pi-fw pi-trash'
          },
      ];

      console.log(this.publishingRequest);
  }
  goBack(){
     console.log('back');
     this.layoutService.tableOpen.next(true);
    // this.back.emit(true);
  }

  createCertification(){
    
    this.displayCertificationModal = true ;
    
  }
}
