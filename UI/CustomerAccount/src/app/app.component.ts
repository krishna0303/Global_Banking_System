import { Component, OnInit } from '@angular/core';
import { Customer } from './models/customer.model';

import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //   constructor(private customerService: CustomerService) { }

  title = 'CustomerAccount';


  //   customers: Customer[] = [];
  ngOnInit(): void {
    // this.getAllCustomerAccountDetails();
  }

  //   getAllCustomerAccountDetails() {
  //     this.customerService.getAllCustomerAccountDetails()
  //       .subscribe(response => {
  //         console.log(response);
  //         this.customers = response;
  //         console.log(this.customers);
  //       });
  //   }



  //   deleteCustomerAccount(accountNumber: string) {
  //     this.customerService.deleteCustomerAccount(accountNumber)
  //       .subscribe(response => {
  //         this.getAllCustomerAccountDetails();
  //         console.log(response);
  //       })

  //   }

}
