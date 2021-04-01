import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { CarComponent } from './car/car.component';
import { RentalComponent } from './rental/rental.component';
import { NaviComponent } from './navi/navi.component';
import { CardtoComponent } from './cardto/cardto.component';
import { ColorComponent } from './color/color.component';
import {BrandFilterPipe} from './pipes/brand-filter.pipe'
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { PaymentComponent } from './component/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    BrandFilterPipe,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CardtoComponent,
    ColorComponent,
    ColorFilterPipe,
    CarFilterPipe,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
