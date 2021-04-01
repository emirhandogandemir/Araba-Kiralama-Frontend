import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/cardto';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
apiUrl:string="https://localhost:44397/api/";

  constructor(private httpClient:HttpClient) { }

getCars():Observable<ListResponseModel<Car>>{
  let newPath =this.apiUrl+"cars/getall"
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

getCarDetails(carId:number):Observable<ListResponseModel<CarDto>>
  {
    let newPath = this.apiUrl + "cars/getcardetail?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetailsParametresiz():Observable<ListResponseModel<CarDto>>
  {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetailByBrandId(brandId:number):Observable<ListResponseModel<CarDto>>
  {
    let newPath = this.apiUrl + "cars/getcardetailbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetailByColorId(colorId:number):Observable<ListResponseModel<CarDto>>
  {
    let newPath = this.apiUrl + "cars/getcardetailbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  

  


}
