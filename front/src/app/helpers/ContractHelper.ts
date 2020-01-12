import { web3 } from './../web3';
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

export class ContractHelper {
    constructor(
        public clientAbi
    ) { }

    public getContract(address: string) {
        return new web3.eth.Contract(this.clientAbi, address);
    }

    public bankAccount() {
        return from(web3.eth.getAccounts())
            .pipe(
                map(accounts => accounts[0])
            );
    }

    public call(address: string, methodName: string) {
        return from(this.getContract(address).methods[methodName]().call())
    }

    public send(address: string, methodName: string, arg) {
        return this.bankAccount()
            .pipe(mergeMap((bankAccount: string) => {
                return from(this.getContract(address).methods[methodName](...Object.values(arg))
                    .send({ from: bankAccount, gasPrice: '1', gas: '1089381' }));
            }))
    }
}