import systemAbi from './../contractsABI/system.contract';
import { Injectable } from '@angular/core';
import { ContractHelper } from '../helpers/ContractHelper';

const systemContractAddress = '0x4a81f975e90c5ac7c2934b666f4dc38ba5218253';

@Injectable({
    providedIn: 'root'
})
export class SystemService extends ContractHelper {
    constructor() {
        super(systemAbi);
    }

    public getClients() {
        return this.call(systemContractAddress, 'getClients');
    }

    public createClient(name) {
        return this.send(systemContractAddress, 'createClient', name);
    }
}
