import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CardtoComponent } from './cardto/cardto.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RentalComponent } from './rental/rental.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/cardto/:carId",component:CardtoComponent} ,
  //{path:"payment",component:PaymentComponent},
  //{path:"rentals",component:RentalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
