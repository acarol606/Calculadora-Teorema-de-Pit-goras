import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  LadoA: number = 0;
  LadoB: number = 0;
  LadoC: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    
  }
  calcularteorema(): void {
    if((this.LadoA=== 0 )|| (this.LadoB===0)){
      alert("Número Inválido\nPreencha lado A e lado B");
    }

    this.LadoC = ((this.LadoA**2) + (this.LadoB**2));
    this.LadoC = Math.sqrt(this.LadoC);
  }

  zerar(): void {
    this.LadoA = 0;
    this.LadoB = 0;
    this.LadoC = 0;
  }
}
