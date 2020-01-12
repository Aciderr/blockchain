import clientAbi from './../contractsABI/client.contract';
import { Injectable } from '@angular/core';
import { ContractHelper } from '../helpers/ContractHelper';

@Injectable({
    providedIn: 'root'
})
export class ClientService extends ContractHelper {
    constructor() {
        super(clientAbi);
    }

    public getClientInfo(address: string) {
        return this.call(address, 'name');
    }

    public getLoans(address: string) {
        return this.call(address, 'getLoans');
    }

    public createLoan(address: string, arg) {
        return this.send(address, 'createLoan', arg)
    }
}
