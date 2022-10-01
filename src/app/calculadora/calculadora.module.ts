import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CalculadoraComponent]
})
export class CalculadoraModule { }
