import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value: number = 100;
  // highValue: number = 1000000;
  options: Options = {
    floor: 5000,
    ceil: 1000000,
    step: 5000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Loan Amount:</b>  ₦" + value;
        case LabelType.High:
          return "<b>Max price:</b>  ₦" + value;
        default:
          return value === 1000000 ? " ₦" + value : "";
      }
    }
  };
  month: number = 1;
  // highValue: number = 90;
  options2: Options = {
    floor: 1,
    ceil: 12,
    step: 1,
    showTicks: true,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + " <b>Month(s) Repayment Option Selected ";
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return value === 12 ? "" + value : "";
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }
  getLoan(){
    console.log("Loan Amt... ", this.value, "\n Month... ",  this.month)
  }

}
