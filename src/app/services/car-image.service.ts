import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl:string="https://localhost:44397/api/";
  constructor(private httpClient:HttpClient) { }

getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
  let newPath= this.apiUrl +"carImages/getimagesbycarid?id="+carId;
  return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
}

getCarsImages():Observable<ListResponseModel<CarImage>> {
let newPath = this.apiUrl +"carImages/getall";
return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
}

}
