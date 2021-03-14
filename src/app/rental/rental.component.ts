import { Component, OnInit } from '@angular/core';
import { Rental } from '../models/rental';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  constructor(private rentalService:RentalService) { }
rentals :Rental []=[];
  ngOnInit(): void {
    this.getRentals();
  }
getRentals(){
this.rentalService.getRentals().subscribe((response)=>{
  this.rentals=response.data
})
}
}
