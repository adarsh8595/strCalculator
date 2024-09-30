import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StringCalcService } from './string-calc.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'strCalculator';
  constructor(
    private stringCalculatorService: StringCalcService
  ) {
    
  }
res1:number = 0;
res2:number = 0;
res3:number = 0;
  ngOnInit(){
    this.res1 = this.stringCalculatorService.add('//;\n1;2');
    this.res2 = this.stringCalculatorService.add('');
    this.res3 = this.stringCalculatorService.add('1,2,-3,4');
  }

 
  
}
