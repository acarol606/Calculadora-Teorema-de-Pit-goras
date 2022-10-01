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

  constructor(){

  }
  ngOnInit(): void {
  }

  calcularteorema(): void {
    let ladoA = this.LadoA;
    let ladoB = this.LadoB;
    let ladoC = this.LadoC;

    if((this.LadoA=== 0 )|| (this.LadoB===0)){
      alert("Número Inválido \n Preencha lado A e lado B");
    }

    ladoC = ((ladoA**2) + (ladoB**2));
    this.LadoC = Math.sqrt(ladoC);
  }

  zerar(): void {
    this.LadoA = 0;
    this.LadoB = 0;
    this.LadoC = 0;

  }


}
