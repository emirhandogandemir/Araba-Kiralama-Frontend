import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';

import { CustomerComponent } from './customer/customer.component';
import { CarComponent } from './car/car.component';
import { RentalComponent } from './rental/rental.component';
import { NaviComponent } from './navi/navi.component';
import { CardtoComponent } from './cardto/cardto.component';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    
    CustomerComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CardtoComponent,
    ColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
