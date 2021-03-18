import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';



@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl="https://localhost:44397/api/rentals/getbyrentaldetails"
apiUrl2="https://localhost:44397/api/rentals/getall"
  constructor(private httpClient:HttpClient) { }

getRentalDetail():Observable<ListResponseModel<Rental>>{
  return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
}
getRentalAll():Observable<ListResponseModel<Rental>>{
  return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl2);
}
}
