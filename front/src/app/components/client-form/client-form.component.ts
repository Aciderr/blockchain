import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/store/store';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {
  @Input() loanForm: FormGroup;
  @Output() createLoan = new EventEmitter();
  displayedColumns: string[] = ['value', 'startDate', 'endDate'];

  constructor(
    public store: Store
  ) { }
}
