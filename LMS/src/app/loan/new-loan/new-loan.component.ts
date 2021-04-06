import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.scss']
})
export class NewLoanComponent implements OnInit {
  requestForm;
  constructor(fb: FormBuilder) {
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
  onSubmit(){}

}
