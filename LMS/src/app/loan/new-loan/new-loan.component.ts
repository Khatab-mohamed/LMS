import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.scss']
})
export class NewLoanComponent implements OnInit {
  requestForm;
  constructor(fb: FormBuilder, private loanService: LoanService ) {
    this.requestForm = fb.group({
      employeeId: ['',  Validators.required],
      salary: '',
      amount: '',
      tenure: '',
      requestDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.loanService.calculate(this.requestForm.value);
  }

}
