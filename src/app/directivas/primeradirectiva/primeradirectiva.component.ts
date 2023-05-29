import { Component } from '@angular/core';

@Component({
  selector: 'app-primeradirectiva',
  templateUrl: './primeradirectiva.component.html',
  styleUrls: ['./primeradirectiva.component.css']
})
export class PrimeradirectivaComponent {

  color: boolean = true;
  border: boolean = true;
  Lista: Array<string> = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'Mexico'];
  Edad: number = 50;
  Fecha: Date = new Date;

}
