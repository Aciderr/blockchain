import { Injectable } from '@angular/core';
import { Store } from './store/store';
import { SystemService } from './services/system.service';
import { ClientService } from './services/client.service';
import { LoanService } from './services/loan.service';

@Injectable({
    providedIn: 'root'
})
export class BusinessLogicFacade {
    constructor(
        private store: Store,
        private systemService: SystemService,
        private clientService: ClientService,
        private loanService: LoanService
    ) { }

    getClientList() {
        let clientsNames = [];

        this.systemService.getClients()
            .subscribe((clients: string[]) => {
                clients.forEach(clientAddress => {
                    this.clientService.getClientInfo(clientAddress)
                        .subscribe(name => {
                            clientsNames.push({
                                name,
                                clientAddress
                            });
                        })
                });
                this.store.setClients(clientsNames);
            });
    }

    createClient(name: string) {
        this.store.setIsSaving();
        this.systemService.createClient({ name })
            .subscribe(() => {
                this.store.setIsSaved();
                this.getClientList();
            });
    }

    getLoansList(address: string) {
        let loansInfo = [];

        this.clientService.getLoans(address)
            .subscribe((loans: any) => {
                loans.forEach(loanAddress => {
                    this.loanService.getLoanInfo(loanAddress)
                        .subscribe((loanInfo: Object) => {
                            loansInfo.push({
                                ...loanInfo,
                                loanAddress
                            });
                        })
                });
                this.store.setLoans(loansInfo);
            })
    }

    createLoan(address: string, value: number, startDate: string, endDate: string) {
        this.store.setIsSaving();
        this.clientService.createLoan(address, { value, startDate, endDate })
            .subscribe(() => {
                this.store.setIsSaved();
                this.getLoansList(address);
            });
    }
}


