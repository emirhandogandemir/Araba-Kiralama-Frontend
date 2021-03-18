import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from '../models/cardto';
import { CarImage } from '../models/carImage';
import { CarImageService } from '../services/car-image.service';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {

  dataLoaded=false;
carDetails:CarDto;
carImages:CarImage[]=[];
constructor(private carService:CarService,
  private carImageService:CarImageService,
  private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.dataLoaded=false;
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"])
      {
        this.getCarDetails(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
      }
    });
  }

  getCarDetails(carId:number)
  {
    this.carService.getCarDetails(carId).subscribe(response => {
      this.carDetails = response.data[0];
     this.dataLoaded=true;
    })
  }
  getCarImagesByCarId(carId:number)
  {
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
    });
  }
 



}
