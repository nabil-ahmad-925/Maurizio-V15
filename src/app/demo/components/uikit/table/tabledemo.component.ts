import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    templateUrl: './tabledemo.component.html',
    styleUrls:['./tabledemo.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class TableDemoComponent implements OnInit {

    customers1: Customer[] = [];

    customers2: Customer[] = [];

    customers3: Customer[] = [];

    selectedCustomers1: Customer[] = [];

    selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    idFrozen: boolean = false;
    customers10:any;
    openedRequest:any;
 


    loading: boolean = true;
    assigneeId = '63ff33e28615ac16ecfd1c01';
    queryParams= [
    {
        "name": "statusList",
        "value": "NEW%7CBLOCKCHAIN_IN_PROGRESS%7CACCEPTED"
    }]

    CompletedQueryParams= [
        {
             "name":"statusList",
            "value": "COMPLETED%7CREJECTED"
        }]
    
        

    @ViewChild('filter') filter!: ElementRef;
    isDetailOpened: any;

    constructor(private customerService: CustomerService, private productService: ProductService,
        private layoutService:LayoutService,private authService:AuthService,private router:Router
        ) { }

    ngOnInit() {
     
  this.reloadData();

 

        this.layoutService.tableOpen.subscribe((event)=>{
            console.log('event',event);    
            if(event==='Publishing Requests' || event === true){
                    this.isDetailOpened =false;
                }
                 
        })

         

        this.loading = false;
    }

    reloadData(){
    
     if(this.router.url.includes('table')){
        this.authService.getRequest('GET','certify/task',undefined,this.queryParams).then((response:any)=>{
            console.log(response?.data);
            this.customers10 = response?.data?.dataList ;
            console.log(this.customers10);
      })
     }else if(this.router.url.includes('completed')){
        console.log('complted INNN')
        this.authService.getRequest('GET','certify/task',undefined,this.CompletedQueryParams).then((response:any)=>{
            console.log('compltetd Data----->',response?.data);

            this.customers10 = response?.data?.dataList ;
            console.log(this.customers10);
      })
     }

        
    }

    
    onSort() {
        this.updateRowGroupMetaData();
    }

    updateRowGroupMetaData() {
        this.rowGroupMetadata = {};

        if (this.customers3) {
            for (let i = 0; i < this.customers3.length; i++) {
                const rowData = this.customers3[i];
                const representativeName = rowData?.representative?.name || '';

                if (i === 0) {
                    this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
                }
                else {
                    const previousRowData = this.customers3[i - 1];
                    const previousRowGroup = previousRowData?.representative?.name;
                    if (representativeName === previousRowGroup) {
                        this.rowGroupMetadata[representativeName].size++;
                    }
                    else {
                        this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
                    }
                }
            }
        }
    }

    expandAll() {
        if (!this.isExpanded) {
            this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

        } else {
            this.expandedRows = {};
        }
        this.isExpanded = !this.isExpanded;
    }

    formatCurrency(value: number) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    toggleTable(publishingRequest:any){
       this.openedRequest = publishingRequest; 
       console.log('hi oye ---------->',publishingRequest);
       console.log(this.isDetailOpened); 
        this.isDetailOpened = !this.isDetailOpened;
        
       console.log(this.isDetailOpened);
    }
    toggleTable1(){
        console.log('hi');
    }


    
}