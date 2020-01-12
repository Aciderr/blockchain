pragma solidity 0.4.18;

contract System {
    address[] public clients;
    
    function createClient(string name) public {
        address newClient = new Client(name);
        clients.push(newClient);
    }
    
    function getClients() public view returns (address[]) {
        return clients;
    }
}

contract Client {
    string public name;
    address[] public loans;  
    
    function Client(string _name) public {
        name = _name;
    }
    
    function createLoan(uint value, string startDate, string endDate) public {
        address newLoan = new Loan(value, startDate, endDate);
        loans.push(newLoan);
    }
    
    function getLoans() public view returns (address[]) {
        return loans;
    }
}

contract Loan {
    LoanInfo public loanInfo;
    
    function Loan(uint value, string startDate, string endDate) public {
        LoanInfo memory _loanInfo = LoanInfo({
            value: value,
            startDate: startDate,
            endDate: endDate
        });
        
        loanInfo = _loanInfo;
    }
    
    struct LoanInfo {
        uint value;
        string startDate;
        string endDate;
    }
}









