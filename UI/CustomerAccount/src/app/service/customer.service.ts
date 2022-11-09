import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'https://localhost:7134/api/Customer';


  constructor(private http: HttpClient) { }



  getAllCustomerAccountDetails(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);

  }

  addNewCustomerAccountDetails(customer: Customer): Observable<Customer> {
    // console.log(customer);
    // customer.accountNumber = '';
    return this.http.post<Customer>(this.baseUrl, customer);
  }

  deleteCustomerAccount(accountNumber: string): Observable<Customer> {
    return this.http.delete<Customer>(this.baseUrl + '/' + accountNumber);

  }



  //



  // public Add(item:Customer):Observable<any>
  // {
  //   console.log(item);
  //   console.log(this.http.post(this.baseUrl, customer));
  //   return this.http.post(this.path+"OpenAccount",item);
  // }


}
