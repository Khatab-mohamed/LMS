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

    const amount = (newLoan.amount / newLoan.tenure).toFixed();
    const date = month + newLoan.tenure ;

    while (newLoan.tenure >= result.length + 1){
      month ++;
      if (month > 12) {
        month = month % 12;
        year += Math.floor(date / 12 );
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
