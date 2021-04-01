import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDto } from '../models/cardto';
import { CarImage } from '../models/carImage';
import { CarImageService } from '../services/car-image.service';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,private carImageService:CarImageService
  ) {}



 filterText="";
  carDetails:CarDto[]=[];
  carImage:CarImage;
  apiUrl = "https://localhost:44397/images/";
  carImageDefault="https://localhost:44397/images/default.jpg"

  currentCarImage:CarImage;
  dataLoaded=false;




  ngOnInit(): void {
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarDetailsAllByBranId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarDetailsColorId(params['colorId']);
      } else {
        this.getCars()
      }
    });
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe((response)=>{
      this.carDetails =response.data;
      this.dataLoaded=true;
    })
  }
  
  getCars() {
    this.carService.getCarDetailsParametresiz().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded=true;
    });
  }

  getCarDetailsAllByBranId(brandId: number) {
    this.carService.getCarDetailByBrandId(brandId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded=true;
      console.log(response,this.carDetails)
    });
  }

  getCarDetailsColorId(colorId: number) {
    this.carService.getCarDetailByColorId(colorId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded=true;
    });
  }

  getCarsImages(){
    this.carImageService.getCarsImages();
  }
}
