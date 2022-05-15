import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify';

  name: string = 'Leifer';
  age: number = 28;
  phone: null = null;
  phone1: undefined = undefined;
  datum: any;

  car: CarModel = {
    brand: 'Ford',
    model: 'Focus',
    year: 2021
  }

  listCards: Array<CarModel> = [
    {
      brand: 'Chevrolet',
      model: 'Camaro',
      year: 2021
    },
    {
      brand: 'BMW',
      model: 'Perú',
      year: 2021
    }
  ];

  status: string | number = 0;
}

interface CarModel {
  brand: string;
  model: string;
  year?: number;
}
