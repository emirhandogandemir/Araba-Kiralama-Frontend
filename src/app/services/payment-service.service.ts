import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentCard } from '../models/paymentCard';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  apiUrl = 'https://localhost:44397/api/payments/';
  constructor(private httpClient: HttpClient) {}

  add(rental: PaymentCard): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', rental);
  }

}
