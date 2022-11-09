

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { Customer } from 'src/app/models/customer.model';
// import { CustomerService } from 'src/app/service/customer.service';
// // import { Customer } from '.src/app/models/customer.ts';
// // import { CustomerService } from 'src/app/Services/customer.service';

// @Component({
//   selector: 'app-addcustomer',
//   templateUrl: './addcustomer.component.html',
//   styleUrls: ['./addcustomer.component.css']
// })
// export class AddcustomerComponent implements OnInit {
//   list!: Customer[];
//   AccountNo: string | undefined;
//   CustomerNo: number | undefined;
//   BranchId: string | undefined;
//   Balance: number | undefined;
//   OpeningDate: Date | undefined;
//   obj!: Customer;
//   customerForm!: FormGroup;
//   submitted = false;
//   constructor(private fb: FormBuilder, private router: Router, private service: CustomerService) {

//   }


//   ngOnInit(): void {
//     this.customerForm = this.fb.group({
//       AccountNo: ['', Validators.required],
//       CustomerNo: ['', Validators.required],
//       BranchId: ['', Validators.required],
//       Balance: ['', Validators.required],
//       OpeningDate: ['', Validators.required]
//     })
//   }
//   public Add() {
//     if (this.customerForm.valid) {
//       console.log(this.customerForm.value)

//       this.obj = new Customer();
//       // this.obj.AccountNo = this.customerForm.value.AccountNo;
//       // this.obj.CustomerNo = this.customerForm.value.CustomerNo;
//       // this.obj.BranchId = this.customerForm.value.BranchId;
//       // this.obj.Balance = this.customerForm.value.Balance;
//       // this.obj.OpeningDate = this.customerForm.value.OpeningDate;
//       console.log(this.obj);
//       this.service.addNewCustomerAccountDetails(this.obj).subscribe((result: any) => {
//         console.log(result);
//       });

//     }
//     else {
//       this.validateAllFormFields(this.customerForm);

//       // alert("Form is invalid")
//     }


//   }
//   // onSubmit(){
//   //   this.submitted=true;
//   //   if(this.customerForm.valid){
//   //     console.log(this.customerForm.value)

//   //   }
//   //   else{
//   //     //throw error
//   //       this.validateAllFormFields(this.customerForm);

//   //       alert("Form is invalid")
//   //   }
//   // }
//   private validateAllFormFields(formGroup: FormGroup) {
//     Object.keys(formGroup.controls).forEach(fields => {
//       const control = formGroup.get(fields);
//       if (control instanceof FormControl) {
//         control.markAsDirty({ onlySelf: true });
//       }
//       else if (control instanceof FormGroup) {
//         this.validateAllFormFields(control)
//       }
//     })
//   }
// }




import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/service/customer.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) { }
  customer: Customer = {
    customerNumber: 0,
    accountNumber: 0,
    branchId: 0,
    openingBalance: 0,
    accountOpeningDate: new Date(),
    accountType: '',
    accountStatus: true


  }
  customerForm!: FormGroup;




  ngOnInit(): void {
  }

  onSubmit() {
    this.customerService.addNewCustomerAccountDetails(this.customer).subscribe(response => {
      this.customer = {
        customerNumber: 0,
        accountNumber: 0,
        branchId: 0,
        openingBalance: 0,
        accountOpeningDate: new Date(),
        accountType: '',
        accountStatus: true
      }
    })

  }

}
