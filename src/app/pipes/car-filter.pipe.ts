import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/cardto';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: CarDto[], filterText: string): CarDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((p:CarDto)=> p.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
