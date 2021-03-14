import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService :CarService) { }
cars:Car [] = [];
  ngOnInit(): void {
this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe((response)=>{
      this.cars=response.data;
    })
  }


}
