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



  cars: Car[] = [];
  carDetails:CarDto[]=[];
  carImage:CarImage;
  apiUrl = "https://localhost:44397/images/";
  carImageDefault="https://localhost:44397/images/default.jpg"
  currentCarImage:CarImage;
  dataLoaded=false;




  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsAllByBranId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsAllByColorId(params['colorId']);
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
  getCarDetailsParametresiz(){
    this.carService.getCarDetailsParametresiz().subscribe((response)=>{
      this.carDetails =response.data;
      this.dataLoaded=true;
    })
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded=true;
    });
  }

  getCarsAllByBranId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded=true;
    });
  }

  getCarsAllByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded=true;
    });
  }

  getCarsImages(){
    this.carImageService.getCarsImages();
  }
}
