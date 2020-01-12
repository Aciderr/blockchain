import loanAbi from './../contractsABI/loan.contract';
import { Injectable } from '@angular/core';
import { ContractHelper } from '../helpers/ContractHelper';

@Injectable({
    providedIn: 'root'
})
export class LoanService extends ContractHelper {
    constructor() {
        super(loanAbi);
    }

    getLoanInfo(address: string) {
        return this.call(address, 'loanInfo');
    }
}