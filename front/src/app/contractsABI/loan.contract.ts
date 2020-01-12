const abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "loanInfo",
    "outputs": [
      {
        "name": "value",
        "type": "uint256"
      },
      {
        "name": "startDate",
        "type": "string"
      },
      {
        "name": "endDate",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "value",
        "type": "uint256"
      },
      {
        "name": "startDate",
        "type": "string"
      },
      {
        "name": "endDate",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
]

export default abi;