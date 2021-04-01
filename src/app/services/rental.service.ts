import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl="https://localhost:44397/api/rentals/getbyrentaldetails"
apiUrl2="https://localhost:44397/api/rentals/getall"
apiUrl3="https://localhost:44397/api/rentals/add"
  constructor(private httpClient:HttpClient) { }

getRentalDetail():Observable<ListResponseModel<Rental>>{
  return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
}
getRentalAll():Observable<ListResponseModel<Rental>>{
  return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl2);
}
add(rental:Rental){
  return this.httpClient.post<ResponseModel>(this.apiUrl3,rental);
}
}
