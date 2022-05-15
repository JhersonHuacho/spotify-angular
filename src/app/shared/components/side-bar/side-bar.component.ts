import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  linksMenu: Array<any> = [
    {
      name: 'Home',
      icon: 'uil-estate'
    },
    {
      name: 'Buscar',
      icon: 'uil-estate'
    }
  ];

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = {
    defaultOptions: [],
    accessLink: []
  }

  customOptions: Array<any> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
  }

  goTo($event: any): void {
    // this.router.navigate(['/', 'favorites']);
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    });
    console.log($event);
    //TODO: URL con parametros solamente es => http://localhost:80/parametro1/parametro2/parametro3
    //TODO: URL con query params solamente es => http://localhost:80/parametro1?query1=valor1&query2=valor2
  }

}
