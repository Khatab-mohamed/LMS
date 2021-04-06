import { Injectable } from '@angular/core';
import { LoanModel } from './loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }
  calculate(newLoan: LoanModel){
    const result = [];
    let year = newLoan.requestDate.getFullYear();
    let month = newLoan.requestDate.getMonth() + 1;

    let amount =Number (newLoan.amount / newLoan.tenure).toFixed(5);

    const date = month + newLoan.tenure ;

    while (newLoan.tenure >= result.length + 1){
      month ++;
      if (month > 12) {
        month = 1;
       year ++;
      }

      const item = {
        month,
        amount,
        year
      };
      result.push(item);

    }
    const output = JSON.stringify(result);
    console.log(output);

  }
}
