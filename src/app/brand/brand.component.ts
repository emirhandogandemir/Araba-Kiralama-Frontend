import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Brand } from '../models/brand';

import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand:Brand;
  filterText=" ";
  brandIdFilter : number;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      
    });
   
  }

 setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }
 
   getCurrentBrandClass(brand:Brand){
     if(brand == this.currentBrand){
       return "list-group-item  active"
     }else{
       return "list-group-item "
     }
   }
 
 

   getAllBrandClass(){
     if(!this.currentBrand || this.currentBrand.brandId==0){
       return "list-group-item active"
     }  else if(this.currentBrand.brandName==""){
      return "list-group-item active"
     }
     else{
      return "list-group-item"
     }
     
 }
 clearCurrentBrand(){
  this.currentBrand={brandName:"",brandId:0};
}

}
