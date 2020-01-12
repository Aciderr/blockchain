import { Component, OnInit } from '@angular/core';
import { Store } from './store/store';
import { BusinessLogicFacade } from './businessLogicFacade';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedClient: string;

  nameForm = new FormControl();

  loanForm = new FormGroup({
    value: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl
  });

  constructor(
    private contractsFacade: BusinessLogicFacade,
    public store: Store
  ) { }

  async ngOnInit() {
    this.contractsFacade.getClientList();
  }

  async showClientLoans(address: string) {
    this.selectedClient = address;
    this.contractsFacade.getLoansList(address);
  }

  async createClient() {
    await this.contractsFacade.createClient(this.nameForm.value);
  }

  async createLoan() {
    if (!this.selectedClient) return;
    await this.contractsFacade.createLoan(
      this.selectedClient,
      this.loanForm.controls.value.value,
      this.loanForm.controls.startDate.value,
      this.loanForm.controls.endDate.value
    );
  }
}
